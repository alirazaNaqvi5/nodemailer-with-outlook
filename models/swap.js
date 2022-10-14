const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('swap', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    fulfillment_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    difference_due: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipping_address_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'address',
        key: 'id'
      }
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cart',
        key: 'id'
      },
      unique: true
    },
    confirmed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    no_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    allow_backorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    idempotency_key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'swap',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_swap_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_swap_2",
        unique: true,
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_52dd74e8c989aa5665ad2852b8",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
