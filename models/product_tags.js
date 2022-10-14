const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_tags', {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    product_tag_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_tag',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_tags',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_product_tags_1",
        unique: true,
        fields: [
          { name: "product_id" },
          { name: "product_tag_id" },
        ]
      },
      {
        name: "IDX_5b0c6fc53c574299ecc7f9ee22",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "IDX_21683a063fe82dafdf681ecc9c",
        fields: [
          { name: "product_tag_id" },
        ]
      },
    ]
  });
};
