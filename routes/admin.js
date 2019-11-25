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
  actionUpdateNoresi,

  // login
  viewSignin,
  actionLogin,
  actionLogout
} = require("../controllers/adminController");

/* 
  *dashboard
*/
router.get("/admin/dashboard", viewDashboard);


// router catalog product 
router.get("/admin/catalog", viewCatalog);
router.post("/admin/catalog/create", actionCatalogCreate);
router.get("/admin/catalog/delete/:id", actionCatalogDetele);
router.post("/admin/catalog/edit", actionCatalogEdit);

// router customer 
router.get("/admin/customer", viewCustomer);
router.get("/admin/customer/detail/:id", viewCustomerInDetail);
router.get("/admin/customer/status/:id", actionCustomerUpdateStatus);

// router transaction
router.get("/admin/transaction", viewTransaction);
router.get("/admin/transaction/detail/:id", viewTransactionDetail);
router.post("/admin/transaction/update_noresi", actionUpdateNoresi);

// router login dan logout
router.get("/signin", viewSignin);
router.post("/signin/action", actionLogin);
router.get("/logout", actionLogout);




// router.post("/cart", actionCreate)
// router.put("/cart/:id", actionUpdate)
// router.delete("/cart/customer/:CustomerId", actionDelete)
// router.delete("/cart/:id", actionDeleteById)

module.exports = router