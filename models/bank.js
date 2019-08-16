'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    nameRekening: DataTypes.STRING,
    noRekening: DataTypes.STRING
  }, {});
  Bank.associate = function(models) {
    // associations can be defined here
  };
  return Bank;
};