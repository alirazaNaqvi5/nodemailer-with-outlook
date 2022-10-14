const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales_channel', {
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
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'sales_channel',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_sales_channel_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
