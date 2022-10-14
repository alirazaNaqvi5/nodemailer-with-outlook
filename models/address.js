const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'country',
        key: 'iso_2'
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'address',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_address_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_9c9614b2f9d01665800ea8dbff",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
