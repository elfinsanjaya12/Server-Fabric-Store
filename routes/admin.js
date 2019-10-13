let express = require("express")
let router = express.Router()
const {
  viewDashboard,
  // controller catalog
  viewCatalog,
  actionCatalogCreate,
  actionCatalogDetele,
  /* controller customer */
  viewCustomer,
  viewCustomerInDetail,
  actionCustomerUpdateStatus,
  viewTransaction
} = require("../controllers/adminController");


/* 
  *dashboard
*/
router.get("/dashboard", viewDashboard);


// router catalog product 
router.get("/catalog", viewCatalog);
router.post("/catalog/create", actionCatalogCreate);
router.get("/catalog/delete/:id", actionCatalogDetele);

// router customer 
router.get("/customer", viewCustomer);
router.get("/customer/detail/:id", viewCustomerInDetail);
router.get("/customer/status/:id", actionCustomerUpdateStatus);

// router transaction
router.get("/transaction", viewTransaction);



// router.post("/cart", actionCreate)
// router.put("/cart/:id", actionUpdate)
// router.delete("/cart/customer/:CustomerId", actionDelete)
// router.delete("/cart/:id", actionDeleteById)

module.exports = router