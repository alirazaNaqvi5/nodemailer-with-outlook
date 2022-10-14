const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('line_item_adjustment', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
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
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'discount',
        key: 'id'
      },
      unique: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'line_item_adjustment',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_line_item_adjustment_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_be9aea2ccf3567007b6227da4d",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "IDX_2f41b20a71f30e60471d7e3769",
        fields: [
          { name: "discount_id" },
        ]
      },
      {
        name: "IDX_bf701b88d2041392a288785ada",
        unique: true,
        fields: [
          { name: "discount_id" },
          { name: "item_id" },
        ]
      },
    ]
  });
};
