let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleCustomer,
  actionCreate,
  actionReadSingleAddress,
  actionDelete
} = require("../controllers/addressController")
const auth = require("../middlewares/auth")

router.use("/address", auth)
router.get("/address/:CustomerId", actionReadAllSingleCustomer)
router.post("/address", actionCreate)
router.get("/address/edit/:id", actionReadSingleAddress)
router.delete("/address/:id", actionDelete)

module.exports = router