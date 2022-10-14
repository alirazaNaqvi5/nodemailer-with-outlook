const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region_payment_providers', {
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
        model: 'payment_provider',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'region_payment_providers',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_region_payment_providers_1",
        unique: true,
        fields: [
          { name: "region_id" },
          { name: "provider_id" },
        ]
      },
      {
        name: "IDX_8aaa78ba90d3802edac317df86",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "IDX_3a6947180aeec283cd92c59ebb",
        fields: [
          { name: "provider_id" },
        ]
      },
    ]
  });
};
