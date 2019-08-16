'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    ProductId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    permater: DataTypes.DOUBLE
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};