let express = require("express")
const auth = require('../middlewares/auth');
const {
  actionCreate,
  actionRealAll,
  actionReadSingleProduct,
  actionUpdate,
  actionDelete
} = require("../controllers/productController")
let router = express.Router()

router.use("/product", auth)
router.post("/product", actionCreate)
router.get("/product", actionRealAll)
router.get("/product/detail/:id", actionReadSingleProduct)
router.put("/product/:id", actionUpdate)
router.delete("/product/:id", actionDelete)

module.exports = router