const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('return_item', {
    return_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'return',
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
    },
    is_requested: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    requested_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    received_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'return_reason',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'return_item',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_return_item_1",
        unique: true,
        fields: [
          { name: "return_id" },
          { name: "item_id" },
        ]
      },
    ]
  });
};
