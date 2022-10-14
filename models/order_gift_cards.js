const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_gift_cards', {
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    gift_card_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'gift_card',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_gift_cards',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_order_gift_cards_1",
        unique: true,
        fields: [
          { name: "order_id" },
          { name: "gift_card_id" },
        ]
      },
      {
        name: "IDX_e62ff11e4730bb3adfead979ee",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_f2bb9f71e95b315eb24b2b84cb",
        fields: [
          { name: "gift_card_id" },
        ]
      },
    ]
  });
};
