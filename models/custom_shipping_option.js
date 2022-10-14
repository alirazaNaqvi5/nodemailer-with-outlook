const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_shipping_option', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipping_option_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'shipping_option',
        key: 'id'
      }
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'custom_shipping_option',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_custom_shipping_option_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_custom_shipping_option_2",
        unique: true,
        fields: [
          { name: "shipping_option_id" },
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_44090cb11b06174cbcc667e91c",
        fields: [
          { name: "shipping_option_id" },
        ]
      },
      {
        name: "IDX_93caeb1bb70d37c1d36d6701a7",
        fields: [
          { name: "cart_id" },
        ]
      },
    ]
  });
};
