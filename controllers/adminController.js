/**
 * Product Controller
 * 
 * @package adminController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const { Product } = require('../models')
// dashboard 
exports.viewDashboard = (req, res) => {
  res.render('admin/dashboard/dashboard', {
    title: "Dashboard"
  })
}

/* view catalog product */
exports.viewCatalog = async (req, res) => {
  try {
    const products = await Product.findAll()
    res.render('admin/catalog/view_catalog', {
      title: "Catalog Product",
      catalogs: products
    })
  } catch (err) {
    console.log(err)
  }
}

