let express = require("express")
let router = express.Router()
const {
  actionReadAllSingleCustomer,
  actionCreate
} = require("../controllers/addressController")
const auth = require("../middlewares/auth")

router.use("/address", auth)
router.get("/address/:CustomerId", actionReadAllSingleCustomer)
router.post("/address", actionCreate)

module.exports = router