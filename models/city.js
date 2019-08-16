'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    ProvinceId: DataTypes.INTEGER
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};