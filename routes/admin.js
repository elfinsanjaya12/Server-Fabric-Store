let express = require("express")
let router = express.Router()
const {
  viewDashboard,
  viewCatalog
} = require("../controllers/adminController");


/* 
  *dashboard
*/
router.get("/dashboard", viewDashboard);


// router catalog product 
router.get("/catalog", viewCatalog);



// router.post("/cart", actionCreate)
// router.put("/cart/:id", actionUpdate)
// router.delete("/cart/customer/:CustomerId", actionDelete)
// router.delete("/cart/:id", actionDeleteById)

module.exports = router