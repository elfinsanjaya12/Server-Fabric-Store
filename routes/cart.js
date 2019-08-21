let express = require("express")
let router = express.Router()
const {
  actionReadAll,
  actionDelete,
  actionUpdate,
  actionCreate
} = require("../controllers/cartController")
const auth = require("../middlewares/auth")

router.use("/cart", auth)
router.post("/cart", actionCreate)
router.get("/cart/:CustomerId", actionReadAll)
router.put("/cart/:id", actionUpdate)
router.delete("/cart/:CustomerId", actionDelete)

module.exports = router