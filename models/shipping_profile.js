const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_profile', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipping_profile',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_shipping_profile_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
