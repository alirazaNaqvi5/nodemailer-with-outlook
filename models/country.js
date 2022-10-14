const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iso_2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    iso_3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'region',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'country',
    timestamps: false,
    indexes: [
      {
        name: "IDX_e78901b1131eaf8203d9b1cb5f",
        unique: true,
        fields: [
          { name: "iso_2" },
        ]
      },
      {
        name: "IDX_b1aac8314662fa6b25569a575b",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
