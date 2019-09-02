'use strict';
const sha1 = require("sha1");
const uniqid = require("uniqid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let saltOke = "rahasia"
    saltOke = sha1(uniqid());
    const passwordOke = sha1("rahasia" + saltOke);
    return queryInterface.bulkInsert('Users', [{
      username: "admin",
      name: "admin",
      password: passwordOke,
      salt: saltOke,
      status: "super admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
