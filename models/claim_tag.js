const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_tag', {
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
    tableName: 'claim_tag',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_claim_tag_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_ec10c54769877840c132260e4a",
        fields: [
          { name: "value" },
        ]
      },
    ]
  });
};
