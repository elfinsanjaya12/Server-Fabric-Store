'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    ProductId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    permeter: DataTypes.DOUBLE
  }, {});
  Cart.associate = function (models) {
    // associations can be defined here
    Cart.belongsTo(sequelize.models.Product, {
      foreignKey: "ProductId"
    });

    Cart.belongsTo(sequelize.models.Customer, {
      foreignKey: "CustomerId"
    });
  };
  return Cart;
};