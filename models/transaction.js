'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    noPesanan: DataTypes.STRING,
    totalHarga: DataTypes.DOUBLE,
    CustomerId: DataTypes.INTEGER,
    AddressId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    dateOfTransaction: DataTypes.DATE,
    typeOfOngkir: DataTypes.STRING,
    note: DataTypes.STRING,
    buktiPembayaran: DataTypes.TEXT,
    shippingCosts: DataTypes.DOUBLE,
    noResi: DataTypes.STRING
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};