'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    code: DataTypes.STRING,
    nama: DataTypes.STRING,
    material: DataTypes.STRING,
    ukuran: DataTypes.DOUBLE,
    warna: DataTypes.STRING,
    harga: DataTypes.DOUBLE,
    stok: DataTypes.INTEGER,
    deskripsi: DataTypes.TEXT,
    like: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};