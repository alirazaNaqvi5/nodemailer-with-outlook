const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending"
    },
    fulfillment_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "not_fulfilled"
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "not_paid"
    },
    display_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
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
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'code'
      }
    },
    tax_rate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    draft_order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'draft_order',
        key: 'id'
      },
      unique: true
    },
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idempotency_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    external_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_order_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_order_2",
        unique: true,
        fields: [
          { name: "draft_order_id" },
        ]
      },
      {
        name: "sqlite_autoindex_order_3",
        unique: true,
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_717a141f96b76d794d409f3812",
        fields: [
          { name: "currency_code" },
        ]
      },
      {
        name: "IDX_e1fcce2b18dbcdbe0a5ba9a68b",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "IDX_19b0c6293443d1b464f604c331",
        fields: [
          { name: "shipping_address_id" },
        ]
      },
      {
        name: "IDX_5568d3b9ce9f7abeeb37511ecf",
        fields: [
          { name: "billing_address_id" },
        ]
      },
      {
        name: "IDX_cd7812c96209c5bdd48a6b858b",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "IDX_c99a206eb11ad45f6b7f04f2dc",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_579e01fb94f4f58db480857e05",
        fields: [
          { name: "display_id" },
        ]
      },
    ]
  });
};
