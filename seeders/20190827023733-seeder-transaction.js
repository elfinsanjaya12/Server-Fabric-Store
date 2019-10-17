'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [
      {
        noPesanan: 'P001',
        totalHarga: 60000,
        CustomerId: 1,
        AddressId: 1,
        status: 'Tertunda',
        dateOfTransaction: new Date(),
        waktu: new Date(),
        typeOfOngkir: 'JNE',
        note: 'Note',
        buktiPembayaran: 'image',
        statusBuktiPembayaran: "Belum Diterima",
        shippingCosts: 20000,
        noResi: 'No. Resi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        noPesanan: 'P002',
        totalHarga: 60000,
        CustomerId: 3,
        AddressId: 2,
        status: 'Lunas',
        dateOfTransaction: new Date(),
        waktu: new Date(),
        typeOfOngkir: 'JNE',
        note: 'Note',
        buktiPembayaran: 'image',
        statusBuktiPembayaran: "Telah Diproses",
        shippingCosts: 20000,
        noResi: 'No. Resi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        noPesanan: 'P004',
        totalHarga: 60000,
        CustomerId: 3,
        AddressId: 3,
        status: 'Lunas',
        dateOfTransaction: new Date(),
        waktu: new Date(),
        typeOfOngkir: 'JNE',
        note: 'Note',
        buktiPembayaran: 'image',
        statusBuktiPembayaran: "Perlu Diproses",
        shippingCosts: 20000,
        noResi: 'No. Resi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        noPesanan: 'P003',
        totalHarga: 60000,
        CustomerId: 3,
        AddressId: 3,
        status: 'Batal',
        dateOfTransaction: new Date(),
        waktu: new Date(),
        typeOfOngkir: 'JNE',
        note: 'Note',
        buktiPembayaran: 'image',
        statusBuktiPembayaran: "Gagal Diproses",
        shippingCosts: 20000,
        noResi: 'No. Resi',
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  }
};
