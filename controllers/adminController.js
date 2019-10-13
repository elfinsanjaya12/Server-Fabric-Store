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
  Address
} = require('../models')
const Op = require("sequelize").Op

// dashboard 
exports.viewDashboard = (req, res) => {
  res.render('admin/dashboard/dashboard', {
    title: "Dashboard"
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

exports.actionCatalogCreate = async (req, res) => {
  const {
    code,
    name,
    material,
    ukuran,
    warna,
    harga,
    stok,
    deskripsi,
  } = req.body
  console.log(code)
  try {
    const files = req.files;
    console.log(files);
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

    Product.create({
      code,
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
      res.redirect("/admin/catalog");
    });

  } catch (error) {
    console.log(error)
  }
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
    res.render('admin/transaction/view_transaction', {
      title: "Catalog Product",
      transaction_all: transaction_all,
      transaction_cencel: transaction_cencel,
      transaction_lunas: transaction_lunas,
      transaction_pendding: transaction_pendding,
      action: "view"
    })
  } catch (err) {
    console.log(err)
  }
}

/* ============================================================================== */

