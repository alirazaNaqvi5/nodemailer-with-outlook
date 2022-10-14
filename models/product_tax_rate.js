const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_tax_rate', {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    rate_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'tax_rate',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_tax_rate',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_tax_rate_1",
        unique: true,
        fields: [
          { name: "product_id" },
          { name: "rate_id" },
        ]
      },
      {
        name: "IDX_2484cf14c437a04586b07e7ddd",
        fields: [
          { name: "rate_id" },
        ]
      },
      {
        name: "IDX_1d04aebeabb6a89f87e536a124",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
