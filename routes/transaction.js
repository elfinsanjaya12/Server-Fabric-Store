let express = require("express")
let router = express.Router()
const {
  actionCreate,
} = require("../controllers/transactionController")
const auth = require("../middlewares/auth")

router.use("/transaction", auth)
router.post("/transaction", actionCreate)

module.exports = router