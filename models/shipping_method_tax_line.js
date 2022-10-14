const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_method_tax_line', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    rate: {
      type: DataTypes.REAL,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipping_method_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'shipping_method',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'shipping_method_tax_line',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_shipping_method_tax_line_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_shipping_method_tax_line_2",
        unique: true,
        fields: [
          { name: "shipping_method_id" },
          { name: "code" },
        ]
      },
      {
        name: "IDX_926ca9f29014af8091722dede0",
        fields: [
          { name: "shipping_method_id" },
        ]
      },
    ]
  });
};
