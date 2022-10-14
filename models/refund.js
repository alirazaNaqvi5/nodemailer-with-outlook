const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refund', {
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
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'refund',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_refund_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_eec9d9af4ca098e19ea6b499ea",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
