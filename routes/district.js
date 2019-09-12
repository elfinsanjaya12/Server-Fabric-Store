let express = require("express")
let router = express.Router()
const {
  getDistrict
} = require("../controllers/districtController")
const auth = require("../middlewares/auth")

router.get("/district/:idkabupaten", getDistrict)

module.exports = router