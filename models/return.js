const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('return_', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "requested"
    },
    swap_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'swap',
        key: 'id'
      }
    },
    claim_order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'claim_order',
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
    shipping_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refund_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    received_at: {
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
    tableName: 'return',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_return_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_return_2",
        unique: true,
        fields: [
          { name: "claim_order_id" },
        ]
      },
      {
        name: "sqlite_autoindex_return_3",
        unique: true,
        fields: [
          { name: "swap_id" },
        ]
      },
      {
        name: "IDX_d4bd17f918fc6c332b74a368c3",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_71773d56eb2bacb922bc328339",
        fields: [
          { name: "claim_order_id" },
        ]
      },
      {
        name: "IDX_bad82d7bff2b08b87094bfac3d",
        fields: [
          { name: "swap_id" },
        ]
      },
    ]
  });
};
