const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('line_item_tax_line', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    rate: {
      type: DataTypes.REAL,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'line_item',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'line_item_tax_line',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_line_item_tax_line_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_line_item_tax_line_2",
        unique: true,
        fields: [
          { name: "item_id" },
          { name: "code" },
        ]
      },
      {
        name: "IDX_5077fa54b0d037e984385dfe8a",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
