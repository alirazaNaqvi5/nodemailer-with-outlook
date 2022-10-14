const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_type_tax_rate', {
    product_type_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_type',
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
    tableName: 'product_type_tax_rate',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_type_tax_rate_1",
        unique: true,
        fields: [
          { name: "product_type_id" },
          { name: "rate_id" },
        ]
      },
      {
        name: "IDX_ece65a774192b34253abc4cd67",
        fields: [
          { name: "rate_id" },
        ]
      },
      {
        name: "IDX_25a3138bb236f63d9bb6c8ff11",
        fields: [
          { name: "product_type_id" },
        ]
      },
    ]
  });
};
