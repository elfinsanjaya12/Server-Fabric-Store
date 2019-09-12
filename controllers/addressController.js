const {
  Address,
  Customer,
  Province,
  City,
  District
} = require("../models")
const Op = require("sequelize").Op

/**
 * include relasi
 */
let include = {
  include: [
    { model: Customer },
    { model: Province },
    { model: City },
    { model: District },
  ]
}

async function validateCustomerId(req) {
  const { CustomerId } = req.params
  let errors = []
  if (CustomerId) {
    try {
      const address = await Address.findOne({
        where: {
          CustomerId: { [Op.eq]: CustomerId },
        }
      })
      if (address === null || address === "") {
        errors.push({
          field: 'CustomerId',
          message: 'CustomerId Not Found',
        })
      }
    } catch (err) {
      throw err
    }
  }
  return errors
}

/**
 * read data address by CustomerId
 * 
 * @param object req
 * @param object res 
 * @return json
 */
exports.actionReadAllSingleCustomer = async (req, res) => {
  const { CustomerId } = req.params
  let error = await validateCustomerId(req)
  if (error.length > 0) return res.status(422).json({ error })

  try {
    const address = await Address.findAll({
      ...include,
      where: {
        CustomerId: { [Op.eq]: CustomerId }
      }
    })
    return res.status(200).json({
      message: "Success Read Address",
      address
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function validate(req) {
  let {
    CustomerId,
    ProvinceId,
    CitiesId,
    DistrictId,
    mainAddress
  } = req.body

  let errors = []

  if (!CustomerId) {
    errors.push({
      field: 'CustomerId',
      message: 'Customer Id is Required',
    })
  } else {
    try {
      const customer = await Customer.findOne({
        where: {
          id: { [Op.eq]: CustomerId }
        }
      })
      if (!customer) {
        errors.push({
          field: "Customer Id",
          message: "Customer Id Not Found"
        });
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  if (!ProvinceId) {
    errors.push({
      field: 'ProvinceId',
      message: 'Province Id is Required',
    })
  } else {
    try {
      const province = await Province.findOne({
        where: {
          id: { [Op.eq]: ProvinceId }
        }
      })
      if (!province) {
        errors.push({
          field: "ProvinceId",
          message: "Province Id Not Found"
        });
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!CitiesId) {
    errors.push({
      field: 'CitiesId',
      message: 'Cities Id is Required',
    })
  } else {
    try {
      const city = await City.findOne({
        where: {
          id: { [Op.eq]: CitiesId }
        }
      })
      if (!city) {
        errors.push({
          field: "CitiesId",
          message: "Cities Id Not Found"
        });
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  if (!DistrictId) {
    errors.push({
      field: 'DistrictId',
      message: 'District Id is Required',
    })
  } else {
    try {
      const district = await District.findOne({
        where: {
          id: { [Op.eq]: DistrictId }
        }
      })
      if (!district) {
        errors.push({
          field: "DistrictId",
          message: "District Id Not Found"
        });
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (!mainAddress) {
    errors.push({
      field: 'mainAddress',
      message: 'mainAddress Id is Required',
    })
  }

  return errors
}

exports.actionCreate = async (req, res) => {
  let {
    CustomerId,
    ProvinceId,
    CitiesId,
    DistrictId,
    mainAddress
  } = req.body

  let errors = await validate(req)
  if (errors.length > 0) return res.status(422).json({ errors });

  try {
    const address = await Address.create({
      CustomerId,
      ProvinceId,
      CitiesId,
      DistrictId,
      mainAddress
    })

    return res.status(200).json({
      message: "Success Create Cart",
      address
    })

  } catch (err) {
    console.log(err)
  }
}

async function validateRead(req) {
  const { id } = req.params
  let errors = []
  if (id) {
    try {
      const address = await Address.findOne({
        where: {
          id: { [Op.eq]: id },
        }
      })
      if (address === null || address === "") {
        errors.push({
          field: 'id',
          message: 'Id Not Found',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return errors
}

exports.actionReadSingleAddress = async (req, res) => {
  const { id } = req.params

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  try {
    const address = await Address.findOne({
      ...include,
      where: { id: { [Op.eq]: id } }
    })

    return res.status(201).json({
      message: "Success Read Single Address",
      address
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.actionDelete = async function (req, res) {
  const { id } = req.params;

  let error = await validateRead(req)
  if (error.length > 0) return res.status(422).json({ error })

  Address.findOne({ where: { id: { [Op.eq]: id } } })
    .then((address) => {
      return address.destroy();
    })
    .then((address) => {
      res.status(200).json({ message: "Success Delete", address });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
    });

};