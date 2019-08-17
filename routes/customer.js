let express = require("express")
let router = express.Router()

const {
  actionRegisterMobile,
  actionLogin
} = require("../controllers/customerController")

router.post("/customer/register", actionRegisterMobile)
router.post("/customer/signin", actionLogin)

module.exports = router