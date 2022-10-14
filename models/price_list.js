const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price_list', {
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
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "sale"
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "draft"
    },
    starts_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ends_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'price_list',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_price_list_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
