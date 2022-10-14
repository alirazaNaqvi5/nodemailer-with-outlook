const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_gift_cards', {
    cart_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cart',
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
    tableName: 'cart_gift_cards',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_cart_gift_cards_1",
        unique: true,
        fields: [
          { name: "cart_id" },
          { name: "gift_card_id" },
        ]
      },
      {
        name: "IDX_d38047a90f3d42f0be7909e8ae",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_0fb38b6d167793192bc126d835",
        fields: [
          { name: "gift_card_id" },
        ]
      },
    ]
  });
};
