const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('money_amount', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'code'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    min_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price_list_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'price_list',
        key: 'id'
      }
    },
    variant_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'product_variant',
        key: 'id'
      }
    },
    region_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'region',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'money_amount',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_money_amount_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_e15811f81339e4bd8c440aebe1",
        fields: [
          { name: "currency_code" },
        ]
      },
      {
        name: "IDX_17a06d728e4cfbc5bd2ddb70af",
        fields: [
          { name: "variant_id" },
        ]
      },
      {
        name: "IDX_b433e27b7a83e6d12ab26b15b0",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
