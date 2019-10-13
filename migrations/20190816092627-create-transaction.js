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
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Customers",
          key: "id"
        }
      },
      AddressId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: "Addresses",
          key: "id"
        }
      },
      status: {
        type: Sequelize.STRING
      },
      dateOfTransaction: {
        type: Sequelize.DATEONLY
      },
      waktu: {
        type: Sequelize.TIME
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