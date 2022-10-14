const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_images', {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    image_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'image',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_images',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_product_images_1",
        unique: true,
        fields: [
          { name: "product_id" },
          { name: "image_id" },
        ]
      },
      {
        name: "IDX_4f166bb8c2bfcef2498d97b406",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "IDX_2212515ba306c79f42c46a99db",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
};
