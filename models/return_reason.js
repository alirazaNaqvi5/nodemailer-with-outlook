const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('return_reason', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent_return_reason_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'return_reason',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'return_reason',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_return_reason_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_00605f9d662c06b81c1b60ce24",
        unique: true,
        fields: [
          { name: "value" },
        ]
      },
    ]
  });
};
