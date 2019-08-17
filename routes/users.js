let express = require("express")
let router = express.Router()

const {
  actionLogin
} = require("../controllers/userController")

router.post("/users/signin", actionLogin)

module.exports = router