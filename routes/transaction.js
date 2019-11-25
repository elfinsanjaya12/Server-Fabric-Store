let express = require("express")
let router = express.Router()
const {
  actionCreate,
  actionReadTransaction,
  actionUploadBuktiBayar
} = require("../controllers/transactionController")
const auth = require("../middlewares/auth")

router.use("/transaction", auth)
router.post("/transaction", actionCreate)
router.get("/transaction/:CustomerId", actionReadTransaction)
router.put("/transaction/upload/:id", actionUploadBuktiBayar)

module.exports = router