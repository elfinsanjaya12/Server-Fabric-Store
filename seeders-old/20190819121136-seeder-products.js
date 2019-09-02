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
      image: 'https://firebasestorage.googleapis.com/v0/b/fabric-store-f985a.appspot.com/o/images%2FWhatsApp%20Image%202019-06-24%20at%2021.38.35.jpeg?alt=media&token=36fe0f0b-7703-4c37-847a-e2ce1fe26427',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'C-002',
      name: 'Kain Test',
      material: 'Halus Test',
      ukuran: 200,
      warna: 'biru',
      harga: 20000,
      stok: 20,
      like: 1,
      deskripsi: 'deskripsi',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabric-store-f985a.appspot.com/o/images%2FWhatsApp%20Image%202019-06-24%20at%2021.38.37.jpeg?alt=media&token=b9e7dd38-9d5d-4a4f-a5b5-2f66b3bd6be4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'C-003',
      name: 'Kain Test 3',
      material: 'Halus Test 3',
      ukuran: 200,
      warna: 'biru',
      harga: 20000,
      stok: 20,
      like: 1,
      deskripsi: 'deskripsi',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabric-store-f985a.appspot.com/o/images%2FWhatsApp%20Image%202019-06-24%20at%2021.38.38.jpeg?alt=media&token=9786fb6e-d2b9-4884-abcf-01dae7da247e',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'C-004',
      name: 'Kain Test 4',
      material: 'Halus Test 4',
      ukuran: 200,
      warna: 'biru',
      harga: 20000,
      stok: 20,
      like: 1,
      deskripsi: 'deskripsi',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabric-store-f985a.appspot.com/o/images%2FWhatsApp%20Image%202019-06-24%20at%2021.38.41.jpeg?alt=media&token=4e2cda55-1cd8-4d71-a1a0-e3bc156d7910',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
