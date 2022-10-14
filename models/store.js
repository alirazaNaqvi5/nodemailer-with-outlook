const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Medusa Store"
    },
    default_currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pkr",

    },
    swap_link_template: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payment_link_template: {
      type: DataTypes.STRING,
      allowNull: true
    },
    invite_link_template: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'store',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_store_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
