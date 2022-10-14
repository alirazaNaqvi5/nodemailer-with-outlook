const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_provider', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    is_installed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'payment_provider',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_payment_provider_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
