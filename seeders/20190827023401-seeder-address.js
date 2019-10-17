'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        CustomerId: 1,
        // ProvinceId: 11,
        // CitiesId: 1101,
        // DistrictId: 1101010,
        mainAddress: "Jln. Abdul Kadir Gg. Pipit No.225",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CustomerId: 2,
        // ProvinceId: 11,
        // CitiesId: 1101,
        // DistrictId: 1101010,
        mainAddress: "Bandar Lampung",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CustomerId: 3,
        // ProvinceId: 11,
        // CitiesId: 1101,
        // DistrictId: 1101010,
        mainAddress: "Bandar Lampung",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
