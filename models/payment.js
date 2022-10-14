const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    swap_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'swap',
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
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'code'
      }
    },
    amount_refunded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    provider_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    captured_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idempotency_key: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_payment_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_payment_2",
        unique: true,
        fields: [
          { name: "swap_id" },
        ]
      },
      {
        name: "IDX_c17aff091441b7c25ec3d68d36",
        fields: [
          { name: "swap_id" },
        ]
      },
      {
        name: "IDX_4665f17abc1e81dd58330e5854",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_f5221735ace059250daac9d980",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_f41553459a4b1491c9893ebc92",
        fields: [
          { name: "currency_code" },
        ]
      },
      {
        name: "IDX_ea94f42b6c88e9191c3649d752",
        fields: [
          { name: "provider_id" },
        ]
      },
      {
        name: "UniquePaymentActive",
        unique: true,
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_aac4855eadda71aa1e4b6d7684",
        fields: [
          { name: "cart_id" },
        ]
      },
    ]
  });
};
