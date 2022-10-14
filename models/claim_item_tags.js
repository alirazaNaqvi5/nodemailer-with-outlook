const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_item_tags', {
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'claim_item',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'claim_tag',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'claim_item_tags',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_claim_item_tags_1",
        unique: true,
        fields: [
          { name: "item_id" },
          { name: "tag_id" },
        ]
      },
      {
        name: "IDX_c2c0f3edf39515bd15432afe6e",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "IDX_dc9bbf9fcb9ba458d25d512811",
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
};
