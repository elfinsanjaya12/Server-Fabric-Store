let express = require("express")
let router = express.Router()

const {
  actionRegisterMobile,
  actionLogin,
  actionRead
} = require("../controllers/customerController")

router.post("/customer/register", actionRegisterMobile)
router.post("/customer/signin", actionLogin)

router.get("/customer", actionRead)

module.exports = router