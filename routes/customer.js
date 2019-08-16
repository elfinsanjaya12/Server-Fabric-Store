let express = require("express")
let router = express.Router()

const { actionRegisterMobile } = require("../controllers/customerController")

router.post("/customer/register", actionRegisterMobile)

module.exports = router