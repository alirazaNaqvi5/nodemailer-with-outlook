const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_group_customers', {
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'customer',
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
    tableName: 'customer_group_customers',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_customer_group_customers_1",
        unique: true,
        fields: [
          { name: "customer_id" },
          { name: "customer_group_id" },
        ]
      },
      {
        name: "IDX_3c6412d076292f439269abe1a2",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "IDX_620330964db8d2999e67b0dbe3",
        fields: [
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
