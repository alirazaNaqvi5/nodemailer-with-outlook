const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_group', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_group',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_customer_group_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_c4c3a5225a7a1f0af782c40abc",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
