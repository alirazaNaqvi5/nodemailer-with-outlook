const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_option_value', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_option',
        key: 'id'
      }
    },
    variant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_variant',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_option_value',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_option_value_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_cdf4388f294b30a25c627d69fe",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "IDX_7234ed737ff4eb1b6ae6e6d7b0",
        fields: [
          { name: "variant_id" },
        ]
      },
    ]
  });
};
