/**
 * Customer Controller
 * 
 * @package CustomerController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const { Customer } = require('../models')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Op = require("sequelize").Op


/**
 * Validation collection that will be used before create data customer
 * 
 * @param object req
 * @param object res 
 * @return array
 */

async function validateRegister(req) {
  let {
    name,
    username,
    phoneNumber,
    password,
    retypePassword
  } = req.body

  let errors = []

  if (!name) {
    errors.push({
      field: 'name',
      message: 'Name is Required',
    })
  }

  if (!username) {
    errors.push({
      field: 'username',
      message: 'Username is Required',
    })
  }

  if (!phoneNumber) {
    errors.push({
      field: 'phoneNumber',
      message: 'Phone Number is Required',
    });
  }

  if (!password) {
    errors.push({
      field: 'password',
      message: 'Password is Required',
    })
  }

  if (password.length <= 5) {
    errors.push({
      field: 'password',
      message: 'Password must be more than 5 characters',
    });
  }

  if (!retypePassword) {
    errors.push({
      field: 'retypePassword',
      message: 'Password Confirmation is Required',
    })
  }

  if (password && retypePassword) {
    if (password != retypePassword) {
      errors.push({
        field: 'retypePassword',
        message: 'Password Confirmation must be same with Password',
      })
    }
  }
  return errors
}

/**
 * Create new data user as a customer
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionRegisterMobile = async function (req, res) {
  let {
    name,
    username,
    phoneNumber,
    password
  } = req.body

  let errors = await validateRegister(req);
  if (errors.length > 0) return res.status(422).json({ errors })

  const hashPassword = bcrypt.hashSync(password, 10);
  console.log("hello" + name)

  const customer = await Customer.create({
    name,
    username,
    phoneNumber,
    password: hashPassword,
  });

  return res.json(customer);
}




/**
 * Validation collection that will be used before login use username
 *
 * @param object req
 * @param object res
 * @return array
 */

async function validateLoginMobile(req) {
  /* form validasi mobile  login or signin */
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
    const customer = await CustomerModel.findOne({
      where: { username: username }
    })

    if (!customer) {
      errors.push({
        field: "username",
        message: "Username not found"
      })
    } else {
      password = sha1(password + customer.salt)
      if (password != customer.password) {
        errors.push({
          field: "password",
          message: "Invalid Password"
        })
      }
    }
  }
  return errors
}