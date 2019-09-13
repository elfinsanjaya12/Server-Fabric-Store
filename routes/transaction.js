let express = require("express")
let router = express.Router()
const {
  actionCreate,
  actionReadTransaction
} = require("../controllers/transactionController")
const auth = require("../middlewares/auth")

router.use("/transaction", auth)
router.post("/transaction", actionCreate)
router.get("/transaction/:CustomerId", actionReadTransaction)

module.exports = router