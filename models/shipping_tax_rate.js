const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_tax_rate', {
    shipping_option_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'shipping_option',
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
    tableName: 'shipping_tax_rate',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_shipping_tax_rate_1",
        unique: true,
        fields: [
          { name: "shipping_option_id" },
          { name: "rate_id" },
        ]
      },
      {
        name: "IDX_346e0016cf045b998074774764",
        fields: [
          { name: "rate_id" },
        ]
      },
      {
        name: "IDX_f672727ab020df6c50fb64c1a7",
        fields: [
          { name: "shipping_option_id" },
        ]
      },
    ]
  });
};
