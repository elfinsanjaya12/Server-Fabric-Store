'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    CitiesId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {});
  District.associate = function (models) {
    // associations can be defined here
    District.belongsTo(sequelize.models.City, {
      foreignKey: "CitiesId"
    });
  };
  return District;
};