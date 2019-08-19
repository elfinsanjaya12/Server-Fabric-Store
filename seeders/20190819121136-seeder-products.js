'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      code: 'C-001',
      name: 'Kain',
      material: 'Halus',
      ukuran: 100,
      warna: 'pink',
      harga: 10000,
      stok: 100,
      like: 1,
      deskripsi: 'deskripsi',
      image: ''
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
