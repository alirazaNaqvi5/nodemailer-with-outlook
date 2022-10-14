const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    is_dynamic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rule_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'discount_rule',
        key: 'id'
      }
    },
    is_disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    parent_discount_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'discount',
        key: 'id'
      }
    },
    starts_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ends_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valid_duration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usage_limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usage_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_discount_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_f65bf52e2239ace276ece2b2f4",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "IDX_ac2c280de3701b2d66f6817f76",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
