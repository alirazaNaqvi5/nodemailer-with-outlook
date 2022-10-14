const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_item', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    claim_order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'claim_order',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'line_item',
        key: 'id'
      }
    },
    variant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product_variant',
        key: 'id'
      }
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'claim_item',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_claim_item_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_64980511ca32c8e92b417644af",
        fields: [
          { name: "variant_id" },
        ]
      },
      {
        name: "IDX_6e0cad0daef76bb642675910b9",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "IDX_900a9c3834257304396b2b0fe7",
        fields: [
          { name: "claim_order_id" },
        ]
      },
    ]
  });
};
