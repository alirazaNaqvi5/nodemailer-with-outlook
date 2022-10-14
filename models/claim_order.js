const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_order', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "na"
    },
    fulfillment_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "not_fulfilled"
    },
    type: {
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
    shipping_address_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'address',
        key: 'id'
      }
    },
    refund_amount: {
      type: DataTypes.INTEGER,
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
    tableName: 'claim_order',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_claim_order_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_017d58bf8260c6e1a2588d258e",
        fields: [
          { name: "shipping_address_id" },
        ]
      },
      {
        name: "IDX_f49e3974465d3c3a33d449d3f3",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
