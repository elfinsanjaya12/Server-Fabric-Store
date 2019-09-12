let express = require("express")
let router = express.Router()
const {
  getCity
} = require("../controllers/citiesController")
const auth = require("../middlewares/auth")

router.get("/city/:idprovince", getCity)

module.exports = router