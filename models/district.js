'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    name: DataTypes.STRING,
    CityId: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
    // associations can be defined here
  };
  return District;
};