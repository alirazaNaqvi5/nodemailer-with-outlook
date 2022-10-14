const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price_list_customer_groups', {
    price_list_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'price_list',
        key: 'id'
      }
    },
    customer_group_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'customer_group',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'price_list_customer_groups',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_price_list_customer_groups_1",
        unique: true,
        fields: [
          { name: "price_list_id" },
          { name: "customer_group_id" },
        ]
      },
      {
        name: "IDX_52875734e9dd69064f0041f4d9",
        fields: [
          { name: "price_list_id" },
        ]
      },
      {
        name: "IDX_c5516f550433c9b1c2630d787a",
        fields: [
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
