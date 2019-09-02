'use strict';
const sha1 = require("sha1");
const uniqid = require("uniqid");


module.exports = {
  up: (queryInterface, Sequelize) => {
    let salt = "rahasia"
    salt = sha1(uniqid());
    let password = sha1("rahasia" + salt);
    return queryInterface.bulkInsert('Customers', [{
      name: 'John Doe',
      username: 'ali',
      phoneNumber: '082377954008',
      password: password,
      salt: salt,
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
