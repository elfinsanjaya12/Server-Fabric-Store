'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionDetail = sequelize.define('TransactionDetail', {
    length: DataTypes.DOUBLE,
    TransactionId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  TransactionDetail.associate = function(models) {
    // associations can be defined here
  };
  return TransactionDetail;
};