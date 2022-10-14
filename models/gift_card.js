const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gift_card', {
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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
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
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    is_disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ends_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gift_card',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_gift_card_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_53cb5605fa42e82b4d47b47bda",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "IDX_b6bcf8c3903097b84e85154eed",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "IDX_dfc1f02bb0552e79076aa58dbb",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
