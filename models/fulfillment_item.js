const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fulfillment_item', {
    fulfillment_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fulfillment',
        key: 'id'
      },
      unique: true
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'line_item',
        key: 'id'
      },
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fulfillment_item',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_fulfillment_item_1",
        unique: true,
        fields: [
          { name: "fulfillment_id" },
          { name: "item_id" },
        ]
      },
    ]
  });
};
