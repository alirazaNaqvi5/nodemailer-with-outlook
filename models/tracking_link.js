const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tracking_link', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fulfillment_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fulfillment',
        key: 'id'
      }
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
    tableName: 'tracking_link',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_tracking_link_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
