const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_option', {
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
    region_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id'
      }
    },
    profile_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'shipping_profile',
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
    },
    price_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_return: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    admin_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipping_option',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_shipping_option_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_a0e206bfaed3cb63c186091734",
        fields: [
          { name: "provider_id" },
        ]
      },
      {
        name: "IDX_c951439af4c98bf2bd7fb8726c",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "IDX_5c58105f1752fca0f4ce69f466",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
