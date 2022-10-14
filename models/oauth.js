const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    application_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    install_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uninstall_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_oauth_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_c49c061b1a686843c5d673506f",
        unique: true,
        fields: [
          { name: "application_name" },
        ]
      },
    ]
  });
};
