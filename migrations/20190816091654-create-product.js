'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.STRING
      },
      ukuran: {
        type: Sequelize.DOUBLE
      },
      warna: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.DOUBLE
      },
      stok: {
        type: Sequelize.INTEGER
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      like: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Products');
  }
};