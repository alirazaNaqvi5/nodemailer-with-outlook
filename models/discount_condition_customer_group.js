const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_condition_customer_group', {
    customer_group_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'customer_group',
        key: 'id'
      }
    },
    condition_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'discount_condition',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount_condition_customer_group',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_condition_customer_group_1",
        unique: true,
        fields: [
          { name: "customer_group_id" },
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_8486ee16e69013c645d0b8716b",
        fields: [
          { name: "condition_id" },
        ]
      },
      {
        name: "IDX_4d5f98645a67545d8dea42e2eb",
        fields: [
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
