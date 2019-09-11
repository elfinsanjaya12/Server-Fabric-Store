const { Cart, Customer, Product } = require("../models")
const Op = require("sequelize").Op

// include relasi product and customer
let include = {
  include: [
    { model: Product, },
    { model: Customer },
  ],
};

/**
 * read data cart by CustomerId
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionReadAll = async function (req, res) {
  const { CustomerId } = req.params
  try {
    const cart = await Cart.findAll({
      ...include,
      where: {
        CustomerId: { [Op.eq]: CustomerId }
      }
    })

    return res.status(200).json({
      message: "Success Read Cart",
      cart
    })
  } catch (err) {
    console.log(err)
  }
}

async function validateCustomerId(req) {
  const { CustomerId } = req.params
  let errors = []
  if (CustomerId) {
    try {
      const cart = await Cart.findOne({
        where: {
          CustomerId: { [Op.eq]: CustomerId },
        }
      })
      if (cart === null || cart === "") {
        errors.push({
          field: 'CustomerId',
          message: 'CustomerId Not Found',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return errors
}

exports.actionDelete = async function (req, res) {
  const { CustomerId } = req.params

  let error = await validateCustomerId(req)
  if (error.length > 0) return res.status(422).json({ error })

  Cart.findOne({
    ...include,
    where: { CustomerId: { [Op.eq]: CustomerId } }
  })
    .then((cart) => {
      return cart.destroy();
    })
    .then((cart) => {
      res.status(200).json({ message: "Success Delete", cart });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
    });
}


async function validate(req) {
  const { id } = req.params
  let {
    CustomerId,
    ProductId,
    permeter
  } = req.body

  let errors = []

  if (!id) {
    errors.push({
      field: 'id',
      message: 'Id is Required',
    })
  } else {
    try {
      const cart = await Cart.findOne({
        where: {
          id: { [Op.eq]: id }
        }
      })
      if (!cart) {
        errors.push({
          field: "id cart",
          message: "id Cart Not Found"
        });
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!CustomerId) {
    errors.push({
      field: 'CustomerId',
      message: 'Customer Id is Required',
    })
  } else {
    try {
      const cart = await Cart.findOne({
        where: {
          CustomerId: { [Op.eq]: CustomerId }
        }
      })
      if (!cart) {
        errors.push({
          field: "Customer Id",
          message: "Customer Id Not Found"
        });
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!ProductId) {
    errors.push({
      field: 'Product Id',
      message: 'Product Id is Required',
    })
  } else {
    try {
      const cart = await Cart.findOne({
        where: {
          ProductId: { [Op.eq]: ProductId }
        }
      })
      if (!cart) {
        errors.push({
          field: "Product Id",
          message: "Product Id Not Found"
        });
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!permeter) {
    errors.push({
      field: 'permeter',
      message: 'Permeter Id is Required',
    })
  }

  return errors
}

exports.actionUpdate = async function (req, res) {
  const { id } = req.params
  let {
    CustomerId,
    ProductId,
    permeter
  } = req.body

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const cart = await Cart.findOne({
      ...include,
      where: { id: { [Op.eq]: id } }
    })

    if (cart) {
      cart.CustomerId = CustomerId
      cart.ProductId = ProductId
      cart.permeter = permeter
      await cart.save()
    }

    return res.status(201).json({
      message: "Success Update Product",
      cart
    })
  } catch (err) {
    console.log(err)
  }
}

async function validateCreate(req) {
  let {
    CustomerId,
    ProductId,
    permeter
  } = req.body

  let errors = []

  if (!CustomerId) {
    errors.push({
      field: 'CustomerId',
      message: 'Customer Id is Required',
    })
  }

  if (!ProductId) {
    errors.push({
      field: 'ProductId',
      message: 'Product Id is Required',
    })
  }

  if (!permeter) {
    errors.push({
      field: 'permeter',
      message: 'Permeter Id is Required',
    })
  }

  return errors
}

exports.actionCreate = async function (req, res) {
  let {
    CustomerId,
    ProductId,
    permeter
  } = req.body

  let errors = await validateCreate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const cart = await Cart.create({
      CustomerId,
      ProductId,
      permeter
    })

    return res.status(200).json({
      message: "Success Create Cart",
      cart
    })

  } catch (err) {
    console.log(err)
  }

}

exports.actionDeleteById = async function (req, res) {
  const { id } = req.params

  Cart.findOne({
    where: { id: { [Op.eq]: id } }
  })
    .then((cart) => {
      return cart.destroy();
    })
    .then((cart) => {
      res.status(200).json({ message: "Success Delete", cart });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
    });
}
