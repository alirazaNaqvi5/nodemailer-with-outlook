const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_condition_product', {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
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
    tableName: 'discount_condition_product',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_condition_product_1",
        unique: true,
        fields: [
          { name: "product_id" },
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_f05132301e95bdab4ba1cf29a2",
        fields: [
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_c759f53b2e48e8cfb50638fe4e",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
