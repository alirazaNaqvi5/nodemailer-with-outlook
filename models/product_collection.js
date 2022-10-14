const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_collection', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    handle: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_collection',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_collection_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_6f234f058bbbea810dce1d04d0",
        unique: true,
        fields: [
          { name: "handle" },
        ]
      },
    ]
  });
};
