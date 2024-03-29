/**
 * User Controller
 *
 * @package UserController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const { User } = require("../models")
const Op = require("sequelize").Op
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
const apiConfig = require("../config/api.json")

/**
 * Validation collection that will be used before login use username
 *
 * @param object req
 * @param object res
 * @return array
 */

async function validateLogin(req) {

  let { username, password } = req.body
  let errors = []

  if (!username) {
    errors.push({
      field: "username",
      message: "Username required"
    })
  }

  if (!password) {
    errors.push({
      field: "password",
      message: "Password required"
    })
  }

  if (username && password) {
    const user = await User.findOne({
      where: { username: { [Op.eq]: username } }
    })

    if (!user) {
      errors.push({
        field: "username",
        message: "Username not found"
      })
    } else {
      password = sha1(password + user.salt)
      if (password != user.password) {
        errors.push({
          field: "password",
          message: "Invalid Password"
        })
      }
    }
  }

  return errors
}

/**
 * Verify data user to login
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionLogin = async function (req, res) {
  let { username, password } = req.body;

  let errors = await validateLogin(req);
  if (errors.length > 0) {
    console.log(errors)
    return res.status(422).json({ message: errors });
  }

  let user = await User.findOne({
    where: {
      username: { [Op.eq]: username }
    }
  })

  try {
    let user_ = user.get({ plain: true });
    const accessToken = jwt.sign(user_, apiConfig.key);

    return res.status(200).json({
      message: "Success Login User",
      accessToken,
      user
    })
  } catch (error) {
    console.log(error)
    return res.status(422).json({ field: "jwt", message: error.message });
  }

}