const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_discounts', {
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'order',
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
    tableName: 'order_discounts',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_order_discounts_1",
        unique: true,
        fields: [
          { name: "order_id" },
          { name: "discount_id" },
        ]
      },
      {
        name: "IDX_e7b488cebe333f449398769b2c",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_0fc1ec4e3db9001ad60c19daf1",
        fields: [
          { name: "discount_id" },
        ]
      },
    ]
  });
};
