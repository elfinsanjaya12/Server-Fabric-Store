'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TransactionDetails', [
      {
        length: 3,
        TransactionId: 1,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        length: 3,
        TransactionId: 1,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        length: 3,
        TransactionId: 2,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        length: 3,
        TransactionId: 3,
        ProductId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TransactionDetails', null, {});
  }
};
