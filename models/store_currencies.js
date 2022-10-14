const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store_currencies', {
    store_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'store',
        key: 'id'
      }
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'store_currencies',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_store_currencies_1",
        unique: true,
        fields: [
          { name: "store_id" },
          { name: "currency_code" },
        ]
      },
      {
        name: "IDX_b4f4b63d1736689b7008980394",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "IDX_82a6bbb0b527c20a0002ddcbd6",
        fields: [
          { name: "currency_code" },
        ]
      },
    ]
  });
};
