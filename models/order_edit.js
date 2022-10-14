const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_edit', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    internal_note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requested_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    requested_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmed_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    confirmed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    declined_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    declined_reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    declined_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    canceled_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_collection_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'payment_collection',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_edit',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_order_edit_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_order_edit_2",
        unique: true,
        fields: [
          { name: "payment_collection_id" },
        ]
      },
      {
        name: "IDX_1f3a251488a91510f57e1bf93c",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_231883ff6ec551fdc0730fea00",
        fields: [
          { name: "payment_collection_id" },
        ]
      },
    ]
  });
};
