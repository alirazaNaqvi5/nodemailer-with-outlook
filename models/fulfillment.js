const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fulfillment', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    claim_order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'claim_order',
        key: 'id'
      }
    },
    swap_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'swap',
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
    no_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    provider_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fulfillment_provider',
        key: 'id'
      }
    },
    tracking_numbers: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "[]"
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shipped_at: {
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
    tableName: 'fulfillment',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_fulfillment_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_d73e55964e0ff2db8f03807d52",
        fields: [
          { name: "claim_order_id" },
        ]
      },
      {
        name: "IDX_a52e234f729db789cf473297a5",
        fields: [
          { name: "swap_id" },
        ]
      },
      {
        name: "IDX_f129acc85e346a10eed12b86fc",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_beb35a6de60a6c4f91d5ae57e4",
        fields: [
          { name: "provider_id" },
        ]
      },
    ]
  });
};
