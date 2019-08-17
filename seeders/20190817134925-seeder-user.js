'use strict';
const sha1 = require("sha1");
const uniqid = require("uniqid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let salt = sha1(uniqid());
    const password = sha1("rahasia" + salt);
    return queryInterface.bulkInsert('Users', [{
      username: "admin",
      name: "admin",
      password: password,
      salt: salt,
      status: "super admin"
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
