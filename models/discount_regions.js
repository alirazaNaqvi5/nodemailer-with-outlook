const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_regions', {
    discount_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'discount',
        key: 'id'
      }
    },
    region_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'discount_regions',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_discount_regions_1",
        unique: true,
        fields: [
          { name: "discount_id" },
          { name: "region_id" },
        ]
      },
      {
        name: "IDX_f4194aa81073f3fab8aa86906f",
        fields: [
          { name: "discount_id" },
        ]
      },
      {
        name: "IDX_a21a7ffbe420d492eb46c305fe",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
