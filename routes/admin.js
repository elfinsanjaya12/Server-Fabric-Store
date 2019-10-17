let express = require("express")
let router = express.Router()
const {
  viewDashboard,
  /* controller catalog */
  viewCatalog,
  actionCatalogCreate,
  actionCatalogDetele,
  actionCatalogEdit,
  /* controller customer */
  viewCustomer,
  viewCustomerInDetail,
  actionCustomerUpdateStatus,
  viewTransaction,
  viewTransactionDetail,
  actionUpdateNoresi
} = require("../controllers/adminController");

/* 
  *dashboard
*/
router.get("/dashboard", viewDashboard);


// router catalog product 
router.get("/catalog", viewCatalog);
router.post("/catalog/create", actionCatalogCreate);
router.get("/catalog/delete/:id", actionCatalogDetele);
router.post("/catalog/edit", actionCatalogEdit);

// router customer 
router.get("/customer", viewCustomer);
router.get("/customer/detail/:id", viewCustomerInDetail);
router.get("/customer/status/:id", actionCustomerUpdateStatus);

// router transaction
router.get("/transaction", viewTransaction);
router.get("/transaction/detail/:id", viewTransactionDetail);
router.post("/transaction/update_noresi", actionUpdateNoresi);




// router.post("/cart", actionCreate)
// router.put("/cart/:id", actionUpdate)
// router.delete("/cart/customer/:CustomerId", actionDelete)
// router.delete("/cart/:id", actionDeleteById)

module.exports = router