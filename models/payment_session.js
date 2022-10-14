const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_session', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    provider_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    idempotency_key: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment_session',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_payment_session_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_payment_session_2",
        unique: true,
        fields: [
          { name: "cart_id" },
          { name: "is_selected" },
        ]
      },
      {
        name: "sqlite_autoindex_payment_session_3",
        unique: true,
        fields: [
          { name: "cart_id" },
          { name: "provider_id" },
        ]
      },
      {
        name: "IDX_d18ad72f2fb7c87f075825b6f8",
        fields: [
          { name: "provider_id" },
        ]
      },
      {
        name: "IDX_d25ba0787e1510ddc5d442ebcf",
        fields: [
          { name: "cart_id" },
        ]
      },
    ]
  });
};
