const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'code'
      }
    },
    tax_rate: {
      type: DataTypes.REAL,
      allowNull: false
    },
    tax_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gift_cards_taxable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    automatic_taxes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    tax_provider_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'tax_provider',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'region',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_region_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_3bdd5896ec93be2f1c62a3309a",
        fields: [
          { name: "currency_code" },
        ]
      },
    ]
  });
};
