const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_variant', {
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
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    ean: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    upc: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    variant_rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inventory_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_backorder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    manage_inventory: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    hs_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mid_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true
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
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_variant',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_product_variant_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_ca67dd080aac5ecf99609960cd",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "IDX_2ca8cfbdafb998ecfd6d340389",
        unique: true,
        fields: [
          { name: "sku" },
        ]
      },
      {
        name: "IDX_045d4a149c09f4704e0bc08dd4",
        unique: true,
        fields: [
          { name: "barcode" },
        ]
      },
      {
        name: "IDX_b5b6225539ee8501082fbc0714",
        unique: true,
        fields: [
          { name: "ean" },
        ]
      },
      {
        name: "IDX_aa16f61348be02dd07ce3fc54e",
        unique: true,
        fields: [
          { name: "upc" },
        ]
      },
    ]
  });
};
