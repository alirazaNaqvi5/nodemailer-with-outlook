const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currency', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    symbol_native: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'currency',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_currency_1",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
