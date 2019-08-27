'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    CustomerId: DataTypes.INTEGER,
    ProvinceId: DataTypes.INTEGER,
    CitiesId: DataTypes.INTEGER,
    DistrictId: DataTypes.INTEGER,
    mainAddress: DataTypes.STRING
  }, {});
  Address.associate = function (models) {
    // associations can be defined here
    Address.belongsTo(sequelize.models.Customer, {
      foreignKey: "CustomerId"
    });
    Address.belongsTo(sequelize.models.Province, {
      foreignKey: "ProvinceId"
    });
    Address.belongsTo(sequelize.models.City, {
      foreignKey: "CitiesId"
    });
    Address.belongsTo(sequelize.models.District, {
      foreignKey: "DistrictId"
    });
  };
  return Address;
};