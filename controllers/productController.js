/**
 * Product Controller
 * 
 * @package ProductController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const { Product } = require('../models')
const Op = require("sequelize").Op

async function validate(req) {
  let {
    code,
    name,
    material,
    ukuran,
    warna,
    harga,
    stok,
    deskripsi,
    image
  } = req.body

  let errors = []

  if (!code) {
    errors.push({
      field: 'code',
      message: 'Code is Required',
    })
  }

  if (!name) {
    errors.push({
      field: 'name',
      message: 'Nama is Required',
    })
  }

  if (!material) {
    errors.push({
      field: 'material',
      message: 'Material is Required',
    })
  }

  if (!ukuran) {
    errors.push({
      field: 'ukuran',
      message: 'ukuran is Required',
    })
  }

  if (!warna) {
    errors.push({
      field: 'warna',
      message: 'Warna is Required',
    })
  }

  if (!harga) {
    errors.push({
      field: 'harga',
      message: 'Harga is Required',
    })
  }

  if (!stok) {
    errors.push({
      field: 'stok',
      message: 'Stok is Required',
    })
  }

  if (!deskripsi) {
    errors.push({
      field: 'deskripsi',
      message: 'Deskripsi is Required',
    })
  }

  if (!image) {
    errors.push({
      field: 'image',
      message: 'Image is Required',
    })
  }

  return errors
}

exports.actionCreate = async (req, res) => {
  let {
    code,
    name,
    material,
    ukuran,
    warna,
    harga,
    stok,
    like,
    deskripsi,
    image
  } = req.body

  let error = await validate(req)
  if (error.length > 0) return res.status(422).json({ error })

  const product = await Product.create({
    code,
    name,
    material,
    ukuran,
    warna,
    harga,
    stok,
    like,
    deskripsi,
    image
  })

  return res.status(200).json(product)
}

exports.actionRealAll = async function (req, res) {
  const products = await Product.findAll()

  return res.status(200).json({
    message: "Success Read All Products",
    products
  })

}


