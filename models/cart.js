const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billing_address_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'address',
        key: 'id'
      }
    },
    shipping_address_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'address',
        key: 'id'
      }
    },
    region_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    payment_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'payment',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "default"
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_authorized_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idempotency_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cart',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_cart_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_cart_2",
        unique: true,
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "IDX_9d1a161434c610aae7c3df2dc7",
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "IDX_242205c81c1152fab1b6e84847",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "IDX_484c329f4783be4e18e5e2ff09",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "IDX_ced15a9a695d2b5db9dabce763",
        fields: [
          { name: "shipping_address_id" },
        ]
      },
      {
        name: "IDX_6b9c66b5e36f7c827dfaa092f9",
        fields: [
          { name: "billing_address_id" },
        ]
      },
    ]
  });
};
