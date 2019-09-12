let express = require("express")
let router = express.Router()
const {
  getProvice
} = require("../controllers/provinceController")
const auth = require("../middlewares/auth")

router.get("/province", getProvice)

module.exports = router