/**
 * Product Controller
 * 
 * @package ProductController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const { Product } = require('../models')
const Op = require("sequelize").Op

/**
 * Validation 
 *
 * @param object req
 * @param object res
 * @return array
 */

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

/**
 * Verify data product
 * 
 * @param object req
 * @param object res 
 * @return json
 */
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

/**
 * Read all product
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionRealAll = async function (req, res) {
  try {
    const products = await Product.findAll()
    return res.status(200).json({
      message: "Success Read All Products",
      products
    })
  } catch (err) {
    console.log(err)
  }
}

/**
 * Get single product
 *
 * @param object req
 * @param object res
 * @return json
 */

exports.actionReadSingleProduct = async function (req, res) {
  const { id } = req.params

  let error = await validateReadSingleProduct(req)
  if (error.length > 0) return res.status(422).json({ error })
  try {
    const product = await Product.findOne({
      where: { id: { [Op.eq]: id } }
    })

    return res.status(201).json({
      message: "Success Read Single Product",
      product
    })
  } catch (err) {
    console.log(err)
  }

}

async function validateReadSingleProduct(req) {
  const { id } = req.params
  let errors = []
  if (id) {
    try {
      const product = await Product.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (product === null || product === "") {
        errors.push({
          field: 'id',
          message: 'Id Not Found',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return errors
}

exports.actionUpdate = async function (req, res) {
  const id = req.params.id;
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

  try {
    const product = await Product.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })

    if (product) {
      product.code = code
      product.name = name
      product.material = material
      product.ukuran = ukuran
      product.warna = warna
      product.harga = harga
      product.stok = stok
      product.like = like
      product.deskripsi = deskripsi
      product.image = image
      await product.save();
    }
    res.statusMessage = 'Data has been changed';
    return res.status(201).json({
      message: "Success Update Product",
      product
    })

  } catch (err) {
    console.log(err)
  }
}

exports.actionDelete = async function (req, res) {
  const { id } = req.params;

  let error = await validateReadSingleProduct(req)
  if (error.length > 0) return res.status(422).json({ error })

  Product.findOne({ where: { id: { [Op.eq]: id } } })
    .then((product) => {
      return product.destroy();
    })
    .then((product) => {
      res.status(200).json({ message: "Success Delete", product });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
    });

};
