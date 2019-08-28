const { Transaction,
  Customer,
  Address,
  TransactionDetail,
  Cart,
  Product
} = require("../models")
const sequelize = require('sequelize')
const Op = require("sequelize").Op


async function validate(req) {
  let {
    noPesanan, //gak wajib
    totalHarga,
    CustomerId,
    AddressId,
    status, //gak wajib
    dateOfTransaction,
    typeOfOngkir,
    note,
    buktiPembayaran, //gak wajib
    shippingCosts,
    noResi //gak wajib
  } = req.body
}
exports.actionCreate = async (req, res) => {
  let {
    // noPesanan, //gak wajib
    totalHarga,
    CustomerId,
    AddressId,
    // status, //gak wajib
    // dateOfTransaction,
    typeOfOngkir,
    note,
    // buktiPembayaran, //gak wajib
    shippingCosts,
    // noResi //gak wajib
  } = req.body

  const noPesanan = Math.floor(100000 + Math.random() * 900000);

  return Transaction.create({
    noPesanan: noPesanan,
    CustomerId,
    AddressId,
    status: "Pendding",
    dateOfTransaction: new Date(),
    typeOfOngkir,
    note,
    shippingCosts,
    totalHarga

  }).then(async (transaction) => {

    const cart = await Cart.findAll({
      where: {
        CustomerId: { [Op.eq]: transaction.CustomerId }
      }
    })
    // console.log(cart[1].id)
    for (var x = 0; x < cart.length; x++) {
      const transactionDetailCreate = await TransactionDetail.create({
        length: cart[x].permeter,
        TransactionId: transaction.id,
        ProductId: cart[x].ProductId
      })

      // console.log(transactionDetailCreate)

      const product = await Product.findOne({
        where: {
          id: { [Op.eq]: cart[x].ProductId }
        }
      })

      console.log(product.stok)

      if (product) {
        product.stok = product.stok - cart[x].permeter
        await product.save()
      }

      const cartDelete = await Cart.findOne({ where: { id: { [Op.eq]: cart[x].id } } })

      await cartDelete.destroy()
    }
    return res.status(200).json({
      message: "Success Create Transaction",
      transaction
    })
  }).catch((err) => {

  });



}