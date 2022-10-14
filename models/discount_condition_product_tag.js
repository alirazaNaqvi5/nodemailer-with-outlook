const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_condition_product_tag', {
    product_tag_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_tag',
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
    tableName: 'discount_condition_product_tag',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_condition_product_tag_1",
        unique: true,
        fields: [
          { name: "product_tag_id" },
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_fbb2499551ed074526f3ee3624",
        fields: [
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_01486cc9dc6b36bf658685535f",
        fields: [
          { name: "product_tag_id" },
        ]
      },
    ]
  });
};
