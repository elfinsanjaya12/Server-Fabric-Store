'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noPesanan: {
        type: Sequelize.STRING
      },
      totalHarga: {
        type: Sequelize.DOUBLE
      },
      CustomerId: {
        type: Sequelize.INTEGER
      },
      AddressId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      dateOfTransaction: {
        type: Sequelize.DATE
      },
      typeOfOngkir: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      buktiPembayaran: {
        type: Sequelize.TEXT
      },
      shippingCosts: {
        type: Sequelize.DOUBLE
      },
      noResi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};