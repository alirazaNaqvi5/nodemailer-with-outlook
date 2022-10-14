const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gift_card_transaction', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    gift_card_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'gift_card',
        key: 'id'
      },
      unique: true
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_taxable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tax_rate: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gift_card_transaction',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_gift_card_transaction_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_gift_card_transaction_2",
        unique: true,
        fields: [
          { name: "gift_card_id" },
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_d7d441b81012f87d4265fa57d2",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
