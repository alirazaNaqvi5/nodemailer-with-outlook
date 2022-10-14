const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('draft_order', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "open"
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
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    no_notification_order: {
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
    tableName: 'draft_order',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_draft_order_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_draft_order_2",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "sqlite_autoindex_draft_order_3",
        unique: true,
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_8f6dd6c49202f1466ebf21e77d",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_5bd11d0e2a9628128e2c26fd0a",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_e87cc617a22ef4edce5601edab",
        fields: [
          { name: "display_id" },
        ]
      },
    ]
  });
};
