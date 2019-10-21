'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        CustomerId: 1,
        ProvinceId: 1,
        CitiesId: 17,
        // DistrictId: 1101010,
        mainAddress: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CustomerId: 2,
        ProvinceId: 1,
        CitiesId: 17,
        // DistrictId: 1101010,
        mainAddress: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CustomerId: 3,
        ProvinceId: 1,
        CitiesId: 17,
        // DistrictId: 1101010,
        mainAddress: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
