let express = require("express")
const auth = require('../middlewares/auth');
const {
  actionCreate,
  actionRealAll
} = require("../controllers/productController")
let router = express.Router()

router.use("/product", auth)
router.post("/product", actionCreate)
router.get("/product", actionRealAll)

module.exports = router