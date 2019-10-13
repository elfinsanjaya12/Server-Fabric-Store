'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    noPesanan: DataTypes.STRING,
    totalHarga: DataTypes.DOUBLE,
    CustomerId: DataTypes.INTEGER,
    AddressId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    dateOfTransaction: DataTypes.DATE,
    waktu: DataTypes.TIME,
    typeOfOngkir: DataTypes.STRING,
    note: DataTypes.STRING,
    buktiPembayaran: DataTypes.TEXT,
    shippingCosts: DataTypes.DOUBLE,
    noResi: DataTypes.STRING
  }, {});
  Transaction.associate = function (models) {
    // associations can be defined here
    Transaction.belongsTo(sequelize.models.Customer, {
      foreignKey: "CustomerId"
    });

    Transaction.belongsTo(sequelize.models.Address, {
      foreignKey: "AddressId"
    });
    // Transaction.hasmany(sequelize.models.TransactionDetail)
  };
  return Transaction;
};