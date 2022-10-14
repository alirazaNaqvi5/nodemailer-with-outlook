const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_option_requirement', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    shipping_option_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'shipping_option',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shipping_option_requirement',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_shipping_option_requirement_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_012a62ba743e427b5ebe9dee18",
        fields: [
          { name: "shipping_option_id" },
        ]
      },
    ]
  });
};
