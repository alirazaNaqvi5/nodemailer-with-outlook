const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region_fulfillment_providers', {
    region_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id'
      }
    },
    provider_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'fulfillment_provider',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'region_fulfillment_providers',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_region_fulfillment_providers_1",
        unique: true,
        fields: [
          { name: "region_id" },
          { name: "provider_id" },
        ]
      },
      {
        name: "IDX_c556e14eff4d6f03db593df955",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "IDX_37f361c38a18d12a3fa3158d0c",
        fields: [
          { name: "provider_id" },
        ]
      },
    ]
  });
};
