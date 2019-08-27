'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      CustomerId: 1,
      ProvinceId: 11,
      CitiesId: 1101,
      DistrictId: 1101010,
      mainAddress: "Jln. Abdul Kadir Gg. Pipit No.225"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
