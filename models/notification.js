const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resource_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resource_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'notification',
        key: 'id'
      }
    },
    provider_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'notification_provider',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'notification',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_notification_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_df1494d263740fcfb1d09a98fc",
        fields: [
          { name: "resource_type" },
        ]
      },
      {
        name: "IDX_ea6a358d9ce41c16499aae55f9",
        fields: [
          { name: "resource_id" },
        ]
      },
      {
        name: "IDX_b5df0f53a74b9d0c0a2b652c88",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
