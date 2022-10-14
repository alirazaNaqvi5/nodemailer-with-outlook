const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('image', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'image',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_image_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
