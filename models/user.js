const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "member"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    api_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_user_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_ba8de19442d86957a3aa3b5006",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
