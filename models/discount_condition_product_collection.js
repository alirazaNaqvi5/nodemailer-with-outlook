const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_condition_product_collection', {
    product_collection_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_collection',
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
    tableName: 'discount_condition_product_collection',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_condition_product_collection_1",
        unique: true,
        fields: [
          { name: "product_collection_id" },
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_a1c4f9cfb599ad1f0db39cadd5",
        fields: [
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_a0b05dc4257abe639cb75f8eae",
        fields: [
          { name: "product_collection_id" },
        ]
      },
    ]
  });
};
