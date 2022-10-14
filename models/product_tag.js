const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_tag', {
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
    tableName: 'product_tag',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_tag_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
