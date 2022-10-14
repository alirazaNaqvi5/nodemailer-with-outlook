const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tax_rate', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    rate: {
      type: DataTypes.REAL,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tax_rate',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_tax_rate_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
