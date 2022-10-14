const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_type', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_type',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_type_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
