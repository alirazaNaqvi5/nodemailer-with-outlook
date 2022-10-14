const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invite', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "member"
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invite',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_invite_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_6b0ce4b4bcfd24491510bf19d1",
        unique: true,
        fields: [
          { name: "user_email" },
        ]
      },
    ]
  });
};
