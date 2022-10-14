const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount_condition', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    operator: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    discount_rule_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'discount_rule',
        key: 'id'
      }
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount_condition',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_condition_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_discount_condition_2",
        unique: true,
        fields: [
          { name: "type" },
          { name: "operator" },
          { name: "discount_rule_id" },
        ]
      },
      {
        name: "IDX_efff700651718e452ca9580a62",
        fields: [
          { name: "discount_rule_id" },
        ]
      },
    ]
  });
};
