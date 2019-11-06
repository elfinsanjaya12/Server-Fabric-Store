'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      code: '020',
      name: 'Brukat Map Gold',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Gold',
      harga: 100000,
      stok: 100,
      like: 1,
      deskripsi: 'Motif mewah dan elegan.\n Bahan Halus, ringan dan berkualitas.\n ',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20020%20100.000%20Map%201.jpg?alt=media&token=a9329e7e-5746-4118-b0fa-c6e6f4f50856',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '023',
      name: 'Brukat Map Hijau Tosca',
      material: 'Brukat',
      ukuran: 1.20,
      warna: 'Hijau Tosca',
      harga: 100000,
      stok: 20,
      like: 1,
      deskripsi: 'Motif mewah dan Elegan,\n bahan berkualitas halus dan ringan\n',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20023%20100.000%20Map%201.jpg?alt=media&token=ad12e7b5-0947-4cb9-8907-676ae41a06dc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '299',
      name: 'Flow Pearl Lavender',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Lavender',
      harga: 90000,
      stok: 10,
      like: 1,
      deskripsi: 'Motif flora sederhana.\n Bahan halus, ringan dan berkualitas',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20299%2090.000%20Flower%20Pearl%201.jpg?alt=media&token=0a702b57-eb64-407c-b3e0-56aa3ff091e8',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '302',
      name: 'Flower Pearl',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Biru',
      harga: 90000,
      stok: 20,
      like: 1,
      deskripsi: 'Motif floral sederhana.\n Bahan halus,ringan dan berkualitas.',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20302%2090.000%20Flower%20Pearl%201.jpg?alt=media&token=eced7d90-e25b-42ab-9316-29ebed7012d7',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: '303',
      name: 'Flower Pearl Salem',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Salem',
      harga: 90000,
      stok: 18,
      like: 1,
      deskripsi: 'Motif floral sederhana.\n Bahan halus, ringan dan berkualitas',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20303%2090.000%20Flower%20Pearl%201.jpg?alt=media&token=767f2df2-a07a-443a-9c81-70c7d29ec1a1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '312',
      name: 'Rose Pearl Ungu',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Ungu',
      harga: 90000,
      stok: 20,
      like: 1,
      deskripsi: 'Motif floral sederhana\n bernuansa pastel Bahan halus,ringan dan berkualitas.',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20312%2090.000%20Rose%20Pearl%201.jpg?alt=media&token=b22d67a6-3f95-4649-ba44-9a356dd2053d',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: '716',
      name: 'Mutiara Silver',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Silver',
      harga: 75000,
      stok: 10,
      like: 1,
      deskripsi: 'Motif sederhana bertabur mutiara.\n Bahan halus, ringan dan berkualitas',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20716%2070.000%20Mutiara%201.jpg?alt=media&token=0584a59a-3523-4018-a90a-8b9aab66e338',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '717',
      name: 'Mutiara Cream',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Cream',
      harga: 70000,
      stok: 35,
      like: 1,
      deskripsi: 'Motif sederhana bertabur mutiara.\n Bahan halus,ringan dan berkualitas.',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20717%2070.000%20Mutiara%201.jpg?alt=media&token=d5c6d87a-37c9-42ef-946d-8198f48289d0',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: '732',
      name: 'Leaf Biru',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Biru',
      harga: 70000,
      stok: 30,
      like: 1,
      deskripsi: 'Motif sederhana dan colorful.\n Bahan halus, ringan dan berkualitas',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20732%2070.000%20Leaf%201.jpg?alt=media&token=e49ac5aa-89fa-417d-bb9c-11ab016e6cf4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '733',
      name: 'Leaf Salem',
      material: 'Brukat',
      ukuran: 1.30,
      warna: 'Salem',
      harga: 75000,
      stok: 50,
      like: 1,
      deskripsi: 'Motif sederhana dan coloeful.\n Bahan halus,ringan dan berkualitas.',
      image: 'https://firebasestorage.googleapis.com/v0/b/fabricmobile-45517.appspot.com/o/ID%20733%2070.000%20Leaf%201.jpg?alt=media&token=3deac035-a99b-4c93-92f5-6c818bfce874',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
