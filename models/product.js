const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    handle: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    is_giftcard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "draft"
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'shipping_profile',
        key: 'id'
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hs_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    origin_country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mid_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    material: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    collection_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'product_collection',
        key: 'id'
      }
    },
    type_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'product_type',
        key: 'id'
      }
    },
    discountable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    external_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_80823b7ae866dc5acae2dac6d2",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "IDX_cf9cc6c3f2e6414b992223fff1",
        unique: true,
        fields: [
          { name: "handle" },
        ]
      },
    ]
  });
};
