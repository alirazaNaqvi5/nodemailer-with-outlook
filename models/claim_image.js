const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_image', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    claim_item_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'claim_item',
        key: 'id'
      }
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
    tableName: 'claim_image',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_claim_image_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_21cbfedd83d736d86f4c6f4ce5",
        fields: [
          { name: "claim_item_id" },
        ]
      },
    ]
  });
};
