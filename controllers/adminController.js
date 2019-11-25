/**
 * Admin Controller
 * 
 * @package adminController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const {
  Product,
  Customer,
  Transaction,
  Address,
  TransactionDetail,
  User
} = require('../models')
const sequelize = require("sequelize")
const bcrypt = require("bcryptjs");
const Op = require("sequelize").Op

// dashboard 
exports.viewDashboard = async (req, res) => {
  const customer = await Customer.count()

  const pendapatan = await Transaction.findAll({
    attributes: ['id', [sequelize.fn('sum', sequelize.col("totalHarga")), 'total']],
    raw: true
  })

  const stok = await Product.findAll()

  const penjualan_permeter = await TransactionDetail.findAll({
    attributes: ['id', [sequelize.fn('sum', sequelize.col("length")), 'meter']],
    raw: true
  })

  const pesanan_baru = await Transaction.findAll({
    include: [{
      model: Customer
    }],
    limit: 10
  })
  console.log(pesanan_baru)

  res.render('admin/dashboard/dashboard', {
    title: "Dashboard",
    customer: customer,
    pendapatan: pendapatan[0].total,
    penjualan_permeter: penjualan_permeter[0].meter,
    pesanan_baru: pesanan_baru,
    stok: stok
  })
}

/* view catalog product */
exports.viewCatalog = async (req, res) => {
  const alertMessage = req.flash('alertMessage');
  const alertStatus = req.flash('alertStatus');
  const alert = { message: alertMessage, status: alertStatus };
  try {
    const products = await Product.findAll()
    res.render('admin/catalog/view_catalog', {
      title: "Catalog Product",
      catalogs: products,
      alert: alert
    })
  } catch (err) {
    console.log(err)
  }
}
/* action create catalog */
exports.actionCatalogCreate = async (req, res) => {
  const {
    name,
    material,
    ukuran,
    warna,
    harga,
    stok,
    deskripsi,
  } = req.body
  // console.log(code)
  try {
    const files = req.files;
    // console.log(files);
    if (!files) {
      req.flash('alertMessage', "Tidak ada Foto yang di Upload, Segera Pilih Foto!");
      req.flash('alertStatus', 'danger');
      return res.redirect("/admin/catalog");
    }

    if (files.foto.mimetype == "image/jpeg" || files.foto.mimetype == "image/png" || files.foto.mimetype == "image/jpg") {
      await files.foto.mv("public/catalog/" + files.foto.name, (err) => {
        if (err) return res.status(500).send(err);
      });
    } else {
      req.flash('alertMessage', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
      req.flash('alertStatus', 'danger');
      return res.redirect("/register");
    }

    const product = await Product.findAll({
      order: [
        ['id', 'DESC'],
      ],
    })

    // ambil data kode product paling akhir dengan desc
    const data = product[0].code;
    var reg = /\d/g;
    var match = data.match(reg);
    let tampung = '';
    if (match.length > 0) {
      for (let i = 0; i < match.length; i++) {
        tampung += match[i];
      }
    }
    var auto = Number(tampung) + 1;
    var kode = "P-OO";
    let code_auto = kode + auto;
    /* akhir kode product automatic */

    Product.create({
      code: code_auto,
      name,
      material,
      ukuran,
      warna,
      harga,
      stok,
      deskripsi,
      image: files.foto.name
    }).then(() => {
      req.flash('alertMessage', `Sukses Menambahkan Data Catalog Baru dengan nama : ${name}`);
      req.flash('alertStatus', 'success');
      res.redirect("/admin/catalog");
    }).catch((err) => {
      // tambah notifi error
      res.redirect("/admin/catalog");
    });

  } catch (error) {
    console.log(error)
  }
}

/* action edit catalog */
exports.actionCatalogEdit = async (req, res) => {
  const {
    code,
    name,
    material,
    ukuran,
    warna,
    harga,
    stok,
    deskripsi,
    id
  } = req.body
  // const { id } = req.params
  // console.log(code)
  try {
    let catalog = await Product.findOne({
      where: { id: { [Op.eq]: id } }
    })
    const files = req.files;
    if (files) {

      if (files.foto.mimetype == "image/jpeg" || files.foto.mimetype == "image/png" || files.foto.mimetype == "image/jpg") {
        await files.foto.mv("public/catalog/" + files.foto.name, (err) => {
          if (err) return res.status(500).send(err);
        });
      } else {
        req.flash('alertMessage', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
        req.flash('alertStatus', 'danger');
        return res.redirect("/register");
      }

      return catalog.update({
        code: code,
        name: name,
        material: material,
        ukuran: ukuran,
        warna: warna,
        harga: harga,
        stok: stok,
        deskripsi: deskripsi,
        image: files.foto.name
      }).then(() => {
        req.flash('alertMessage', `Sukses Ubah Data Catalog dengan nama : ${name}`);
        req.flash('alertStatus', 'success');
        res.redirect("/admin/catalog");
      }).catch((err) => {
        // tambah notifi error
        res.redirect("/admin/catalog");
      });
    } else {
      return catalog.update({
        code: code,
        name: name,
        material: material,
        ukuran: ukuran,
        warna: warna,
        harga: harga,
        stok: stok,
        deskripsi: deskripsi,
      }).then(() => {
        req.flash('alertMessage', `Sukses Ubah Data Catalog dengan nama : ${name}`);
        req.flash('alertStatus', 'success');
        res.redirect("/admin/catalog");
      }).catch((err) => {
        // tambah notifi error
        res.redirect("/admin/catalog");
      });
    }

  } catch (error) {
    console.log(error)
  }
}

/* action delete catalog */
exports.actionCatalogDetele = (req, res) => {
  const { id } = req.params
  Product.findOne({
    where: {
      id: { [Op.eq]: id }
    }
  }).then(product => {
    return product.destroy().then(() => {
      req.flash('alertMessage', `Sukses Menghapus Data Catalog dengan nama : ${product.name}`)
      req.flash('alertStatus', 'success')
      res.redirect("/admin/catalog")
    });
  })
    .catch(err => {
      req.flash('alertMessage', err.message)
      req.flash('alertStatus', 'danger')
      res.redirect("/admin/mahasiswa/view")
    });
}

/* ============================================================================== */
/* view customer */
exports.viewCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll()
    res.render('admin/customer/view_customer', {
      title: "Catalog Product",
      customer: customer
    })
  } catch (err) {
    console.log(err)
  }
}

/* view detail customer */
exports.viewCustomerInDetail = async (req, res) => {
  const { id } = req.params
  try {
    // query gel all transaction by customer id
    const customer_transaction = await Transaction.findAll({
      include: [{
        model: Customer
      }],
      where: { CustomerId: { [Op.eq]: id } }
    })

    // query gel all address by customer id
    const customer_address = await Address.findAll({
      include: [{
        model: Customer
      }],
      where: { CustomerId: { [Op.eq]: id } }
    })

    // query get customer by id
    const customer = await Customer.findOne({
      where: { id: { [Op.eq]: id } }
    })


    res.render('admin/customer/view_customer_detail', {
      title: "Customer Detail",
      customer: customer,
      customer_address: customer_address,
      customer_transaction: customer_transaction
    })
  } catch (err) {
    console.log(err)
  }
}

/* update status customer active and nonactive */
exports.actionCustomerUpdateStatus = async (req, res) => {
  let { id } = req.params
  let customer = await Customer.findOne({
    where: { id: { [Op.eq]: id } }
  })
  /* ketika status active maka update status jadi nonactive */
  if (customer.status === "Active") {
    customer.status = "Nonactive"
    await customer.save()
    res.redirect("/admin/customer")
  } else { /* ketika status nonactive maka update status jadi active */
    customer.status = "Active"
    await customer.save()
    res.redirect("/admin/customer")
  }
}

/* ============================================================================== */

/* ============================================================================== */
/* view transaction */
exports.viewTransaction = async (req, res) => {
  try {
    // query all transaction
    const transaction_all = await Transaction.findAll({
      include: [{
        model: Customer
      }]
    })
    // query batal transaction
    const transaction_cencel = await Transaction.findAll({
      include: [{
        model: Customer
      }],
      where: { status: { [Op.eq]: "Batal" } }
    })

    // query tertunda transaction
    const transaction_pendding = await Transaction.findAll({
      include: [{
        model: Customer
      }],
      where: { status: { [Op.eq]: "Tertunda" } }
    })

    // query lunas transaction
    const transaction_lunas = await Transaction.findAll({
      include: [{
        model: Customer
      }],
      where: { status: { [Op.eq]: "Lunas" } }
    })
    // query lunas transaction dan telah diproses
    const transaction_telah_diproses = await Transaction.findAll({
      include: [{
        model: Customer
      }],
      where: {
        status: {
          [Op.eq]: "Lunas"
        },
        statusBuktiPembayaran: {
          [Op.eq]: "Telah Diproses"
        }
      }
    })

    // query lunas transaction dan telah diproses
    const transaction_perlu_diproses = await Transaction.findAll({
      include: [{
        model: Customer
      }],
      where: {
        status: {
          [Op.eq]: "Lunas"
        },
        statusBuktiPembayaran: {
          [Op.eq]: "Perlu Diproses"
        }
      }
    })

    res.render('admin/transaction/view_transaction', {
      title: "Catalog Product",
      transaction_all: transaction_all,
      transaction_cencel: transaction_cencel,
      transaction_lunas: transaction_lunas,
      transaction_pendding: transaction_pendding,
      transaction_telah_diproses: transaction_telah_diproses,
      transaction_perlu_diproses: transaction_perlu_diproses,
      action: "view"
    })
  } catch (err) {
    console.log(err)
  }
}

/* view transaction detail */
exports.viewTransactionDetail = async (req, res) => {
  const { id } = req.params
  try {

    // query read transaction by id
    const transaction = await Transaction.findOne({
      include: [
        { model: Customer },
        { model: Address }
      ],
      where: { id: { [Op.eq]: id } }
    })
    console.log(transaction)

    // query read transaction by transaction id
    const transaction_detail = await TransactionDetail.findAll({
      include: [{ model: Product }],
      where: { TransactionId: { [Op.eq]: transaction.id } }
    })

    // query read all product
    const product = await Product.findAll()


    res.render('admin/transaction/view_transaction_detail', {
      title: "Transaction Detail",
      transaction: transaction,
      transaction_detail: transaction_detail,
      product: product
    })
  } catch (error) {
    console.log(err)
  }
}

/* action update transaction add no resi */
exports.actionUpdateNoresi = async (req, res) => {
  const { id, noResi } = req.body
  const transaction = await Transaction.findOne({
    where: { id: { [Op.eq]: id } }
  })

  if (transaction) {
    transaction.noResi = noResi
    await transaction.save()
    // res.redirect('/admin/transaction')
  }
  res.redirect('/admin/transaction')
}

/* ============================================================================== */
/* login */
/**
 * view signin 
 * GET
 * /signin
 */
exports.viewSignin = (req, res) => {
  if (req.session.user == null || req.session.user == undefined) {
    res.render("login", { action: "false" });
  } else {
    res.redirect('/admin')
  }
}
/**
 * action login
 * POST
 * /signin/action
 */
exports.actionLogin = async (req, res) => {

  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: { [Op.eq]: username } } });

  if (user) {
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      req.session.user = {
        id: user.id,
        username: user.username,
        status: user.status
      }

      if (user.status === "super admin") {
        res.redirect("/admin/dashboard");
      }
    } else {
      res.redirect("/signin");
    }
  } else {
    res.render("login", { action: "view" });
  }
}

/**
 * action logout
 * get
 * /logout
 */
exports.actionLogout = async (req, res) => {
  req.session.destroy()
  res.redirect('/signin');
}


