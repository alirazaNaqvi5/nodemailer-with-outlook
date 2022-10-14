const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fulfillment_provider', {
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
    tableName: 'fulfillment_provider',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_fulfillment_provider_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
