const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_item_change', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_edit_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'order_edit',
        key: 'id'
      },
      unique: true
    },
    original_line_item_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'line_item',
        key: 'id'
      },
      unique: true
    },
    line_item_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'line_item',
        key: 'id'
      },
      unique: true
    }
  }, {
    sequelize,
    tableName: 'order_item_change',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_order_item_change_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_order_item_change_2",
        unique: true,
        fields: [
          { name: "line_item_id" },
        ]
      },
      {
        name: "sqlite_autoindex_order_item_change_3",
        unique: true,
        fields: [
          { name: "order_edit_id" },
          { name: "original_line_item_id" },
        ]
      },
      {
        name: "sqlite_autoindex_order_item_change_4",
        unique: true,
        fields: [
          { name: "order_edit_id" },
          { name: "line_item_id" },
        ]
      },
    ]
  });
};
