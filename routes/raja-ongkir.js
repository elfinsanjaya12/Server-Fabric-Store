const express = require("express");
const router = express.Router();
const { Address, Cart } = require("../models")
const Op = require("sequelize").Op
// var http = require("https");
const { init } = require("rajaongkir-node-js");
const request = init("0cbb08180c15e7b79c3cc1eddda5d06e", "starter");
//const RajaOngkir = require('rajaongkir-nodejs').Starter('API KEY');

router.get("/provinsi", function (req, res) {
  const province = request.get("/province");
  console.log(province)

  province.then((prov) => {
    let js = JSON.parse(prov);
    res.status(200).json(js)
  });

  // RajaOngkir.getProvinces().then(function (result) {
  //     res.json(result);
  // }).catch(function (error) {
  //     console.log(error);
  // });
});

router.get("/kota/:id", function (req, res) {
  const allCityInProvince = request.get(`/city?&province=${req.params.id}`);

  allCityInProvince.then((city) => {
    // console.log(citi)
    let citi = JSON.parse(city);
    res.send(citi);
  });

  // RajaOngkir.getCities().then(function (result) {
  //     res.json(result);
  // }).catch(function (error) {
  //     console.log(error);
  // });
});

router.post("/", function (req, res) {

  const { CustomerId, courier } = req.body

  let weight = 200;

  Address.findOne({
    where: { CustomerId: { [Op.eq]: CustomerId } }
  }).then(async (address) => {

    const cart = await Cart.findAll({
      where: {
        CustomerId: { [Op.eq]: CustomerId }
      }
    })
    if (cart) {
      var meter = 0;
      for (let i = 0; i < cart.length; i++) {
        meter += cart[i].permeter
      }

      weight *= meter;

      const data = {
        origin: 21,
        destination: address.CitiesId,
        weight: weight,
        courier: courier // bisa merequest satu atau beberapa kurir sekaligus
      };

      const cost = request.post("cost", data);

      cost.then((cst) => {
        let cekOngkir = JSON.parse(cst);
        res.status(200).json(cekOngkir.rajaongkir.results[0])
        // res.send(cst);
        // console.log(cst);
      });
    }
  }).catch((err) => {
    console.log(err)
  });


  // const form = req.body;
  // const data = {
  //   origin: form.origin,
  //   destination: form.destination,
  //   weight: form.weight,
  //   courier: form.courier // bisa merequest satu atau beberapa kurir sekaligus
  // };
  // const cost = request.post("cost", data);
  // cost.then((cst) => {
  //   let cekOngkir = JSON.parse(cst);
  //   res.status(200).json(cekOngkir)
  //   // res.send(cst);
  //   // console.log(cst);
  // });
});

module.exports = router;