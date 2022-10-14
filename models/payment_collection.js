const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_collection', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    authorized_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    refunded_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    region_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'region',
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
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_collection',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_payment_collection_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_aa9627f942aefe3e731636e58b",
        fields: [
          { name: "currency_code" },
        ]
      },
      {
        name: "IDX_7b3239a9b6e132100cc19b3ebe",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
