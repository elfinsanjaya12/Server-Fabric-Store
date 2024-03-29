/**
 * Customer Controller
 * 
 * @package CustomerController
 * @subpackage Controllers
 * @author Elfin Sanjaya
 */

const { Customer, Address } = require('../models')
const apiConfig = require("../config/api.json")
const jwt = require("jsonwebtoken")
const Op = require("sequelize").Op
const uniqid = require("uniqid")
const sha1 = require("sha1")

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
  } else {
    const customer = await Customer.findOne({
      where: {
        username: { [Op.eq]: username },
      }
    })
    if (customer) {
      errors.push({
        field: 'username',
        message: 'Username has been taken',
      })
    }
  }

  if (!phoneNumber) {
    errors.push({
      field: 'phoneNumber',
      message: 'Phone Number is Required',
    });
  } else {
    const customer = await Customer.findOne({
      where: {
        phoneNumber: { [Op.eq]: phoneNumber },
      }
    })
    if (customer) {
      errors.push({
        field: 'phoneNumber',
        message: 'Phone Number has been taken',
      })
    }
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
    password,
    ProvinceId,
    CitiesId
  } = req.body
  let salt = sha1(uniqid())

  let errors = await validateRegister(req);
  if (errors.length > 0) return res.status(422).json({ errors })

  password = sha1(password + salt)

  let customerCreate = await Customer.create({
    name,
    username,
    phoneNumber,
    password,
    salt,
    status: 'Active'
  });

  if (customerCreate) {

    const address = await Address.create({
      CustomerId: customerCreate.id,
      ProvinceId,
      CitiesId,
    })

    errors = await validateLogin(req);
    if (errors.length > 0) return res.status(422).json({ errors });

    let customer = await Customer.findOne({
      where: {
        username: { [Op.eq]: username },
        status: 'Active'
      }
    })

    try {
      let customer_ = customer.get({ plain: true });
      const accessToken = jwt.sign(customer_, apiConfig.key);

      return res.json({
        message: "Success Signup customer",
        accessToken,
        customerCreate,
        address
      });
    } catch (error) {
      return res.status(422).json([{ field: "jwt", message: error.message }]);
    }
  }
}

/**
 * Validation collection that will be used before login use username
 *
 * @param object req
 * @param object res
 * @return array
 */

async function validateLogin(req) {
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
    const cus = await Customer.findOne({
      where: {
        username: { [Op.eq]: username },
        status: 'Active'
      }
    });

    if (!cus) {
      errors.push({
        field: "username",
        message: "Username not found"
      });
    } else {
      password = sha1(password + cus.salt);
      if (password != cus.password) {
        errors.push({
          field: "password",
          message: "Invalid Password"
        });
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
  let { username } = req.body;

  let errors = await validateLogin(req);
  if (errors.length > 0) return res.status(422).json({ errors });

  let customer = await Customer.findOne({
    where: {
      username: { [Op.eq]: username },
      status: 'Active'
    }
  })

  try {
    let customer_ = customer.get({ plain: true });
    const accessToken = jwt.sign(customer_, apiConfig.key);
    console.log("accessToken")
    return res.json({
      message: "Success Login customer",
      accessToken,
      customer
    });
  } catch (error) {
    return res.status(422).json([{ field: "jwt", message: error.message }]);
  }
}

exports.actionRead = async (req, res) => {
  try {
    let customer = await Customer.findAll()
    return res.json({
      message: "Success Read All Customer",
      customer
    });
  } catch (err) {
    console.log(err)
  }
}

exports.actionUpdateStatus = async (req, res) => {
  const { id } = req.params
  try {
    const customer = await Customer.findOne({
      where: { id: { [Op.eq]: id }, }
    })

    if (customer.status === "Active") {
      customer.status = "Nonactive"
      await customer.save();
      return res.status(201).json({
        message: "Success Update Status Nonactive",
        customer
      })
    } else {
      customer.status = "Active"
      await customer.save();
      return res.status(201).json({
        message: "Success Update Status Active",
        customer
      })
    }

  } catch (err) {
    console.log(err)
  }
}

exports.actionReadSingleCustomer = async (req, res) => {
  const { id } = req.params

  try {
    const customer = await Customer.findOne({
      where: {
        id: { [Op.eq]: id }
      }
    })

    return res.status(200).json({
      message: "Success Read Single Data Customer",
      customer
    })
  } catch (err) {
    console.log(err)
  }

}