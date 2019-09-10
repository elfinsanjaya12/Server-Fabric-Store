'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING,
    // email: DataTypes.STRING,
    status: DataTypes.STRING,
    salt: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
  };
  return Customer;
};