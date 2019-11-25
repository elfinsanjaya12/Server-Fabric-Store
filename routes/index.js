var express = require('express');
var router = express.Router();
const auth = require("../middlewares/auth_admin");

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', auth.isLogin, function (req, res, next) {
  res.redirect("/admin/dashboard")
});

/* GET home page. */
router.get('/admin', auth.isLogin, function (req, res, next) {
  res.redirect("/admin/dashboard")
});
module.exports = router;
