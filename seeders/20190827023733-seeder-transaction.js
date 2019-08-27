'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [{
      noPesanan: 'P001',
      totalHarga: 60000,
      CustomerId: 1,
      AddressId: 1,
      status: 'Pendding',
      dateOfTransaction: '',
      typeOfOngkir: 'JNE',
      note: 'Note',
      buktiPembayaran: 'image',
      shippingCosts: 20000,
      noResi: 'No. Resi'
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  }
};
