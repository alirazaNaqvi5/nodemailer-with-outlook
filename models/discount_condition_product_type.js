const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_condition_product_type', {
    product_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_type',
        key: 'id'
      }
    },
    condition_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'discount_condition',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount_condition_product_type',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_condition_product_type_1",
        unique: true,
        fields: [
          { name: "product_type_id" },
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_6ef23ce0b1d9cf9b5b833e52b9",
        fields: [
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_e706deb68f52ab2756119b9e70",
        fields: [
          { name: "product_type_id" },
        ]
      },
    ]
  });
};
