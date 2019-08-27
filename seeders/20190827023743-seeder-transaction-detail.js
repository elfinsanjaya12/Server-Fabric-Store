'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TransactionDetails', [{
      length: 3,
      TransactionId: 1,
      ProductId: 1
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TransactionDetails', null, {});
  }
};
