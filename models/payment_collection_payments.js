const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_collection_payments', {
    payment_collection_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'payment_collection',
        key: 'id'
      }
    },
    payment_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment_collection_payments',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_payment_collection_payments_1",
        unique: true,
        fields: [
          { name: "payment_collection_id" },
          { name: "payment_id" },
        ]
      },
      {
        name: "IDX_a95cfffa38cc5b5b6a91649cf1",
        fields: [
          { name: "payment_collection_id" },
        ]
      },
      {
        name: "IDX_7e1bbc48b8e2b5b9b93b78644f",
        fields: [
          { name: "payment_id" },
        ]
      },
    ]
  });
};
