const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_discounts', {
    cart_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    discount_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'discount',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cart_discounts',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_cart_discounts_1",
        unique: true,
        fields: [
          { name: "cart_id" },
          { name: "discount_id" },
        ]
      },
      {
        name: "IDX_6680319ebe1f46d18f106191d5",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_8df75ef4f35f217768dc113545",
        fields: [
          { name: "discount_id" },
        ]
      },
    ]
  });
};
