'use strict';
const sha1 = require("sha1");
const uniqid = require("uniqid");


module.exports = {
  up: (queryInterface, Sequelize) => {
    let salt = "rahasia"
    salt = sha1(uniqid());
    let password = sha1("rahasia" + salt);
    return queryInterface.bulkInsert('Customers', [
      {
        name: 'Ali Imran',
        username: 'ali',
        phoneNumber: '082377954008',
        password: password,
        salt: salt,
        status: 'Active',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elfin Sanjaya',
        username: 'elfin',
        phoneNumber: '08154023099',
        password: password,
        salt: salt,
        status: 'Nonactive',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Itce Diasari',
        username: 'itce',
        phoneNumber: '0898989898',
        password: password,
        salt: salt,
        status: 'Active',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
