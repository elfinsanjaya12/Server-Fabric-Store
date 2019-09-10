let express = require("express")
let router = express.Router()

const {
  actionRegisterMobile,
  actionLogin,
  actionRead,
  actionUpdateStatus
} = require("../controllers/customerController")
const auth = require("../middlewares/auth")

router.post("/customer/register", actionRegisterMobile)
router.post("/customer/signin", actionLogin)

router.use("/customer", auth)
router.get("/customer", actionRead)
router.put("/customer/status/:id", actionUpdateStatus)

module.exports = router