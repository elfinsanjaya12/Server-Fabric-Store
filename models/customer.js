'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    telpon: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
  };
  return Customer;
};