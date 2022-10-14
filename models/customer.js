const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billing_address_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'address',
        key: 'id'
      }
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    has_account: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_customer_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_customer_2",
        unique: true,
        fields: [
          { name: "billing_address_id" },
        ]
      },
      {
        name: "IDX_fdb2f3ad8115da4c7718109a6e",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "IDX_8abe81b9aac151ae60bf507ad1",
        fields: [
          { name: "billing_address_id" },
        ]
      },
    ]
  });
};
