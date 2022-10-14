const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('note', {
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
    resource_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resource_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'note',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_note_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_f74980b411cf94af523a72af7d",
        fields: [
          { name: "resource_type" },
        ]
      },
      {
        name: "IDX_3287f98befad26c3a7dab088cf",
        fields: [
          { name: "resource_id" },
        ]
      },
    ]
  });
};
