const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_method', {
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
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    claim_order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'claim_order',
        key: 'id'
      }
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    swap_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'swap',
        key: 'id'
      }
    },
    return_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'return',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shipping_method',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_shipping_method_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sqlite_autoindex_shipping_method_2",
        unique: true,
        fields: [
          { name: "return_id" },
        ]
      },
      {
        name: "IDX_fc963e94854bff2714ca84cd19",
        fields: [
          { name: "shipping_option_id" },
        ]
      },
      {
        name: "IDX_5267705a43d547e232535b656c",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_d783a66d1c91c0858752c933e6",
        fields: [
          { name: "claim_order_id" },
        ]
      },
      {
        name: "IDX_d92993a7d554d84571f4eea1d1",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_fb94fa8d5ca940daa2a58139f8",
        fields: [
          { name: "swap_id" },
        ]
      },
      {
        name: "IDX_1d9ad62038998c3a85c77a53cf",
        fields: [
          { name: "return_id" },
        ]
      },
    ]
  });
};
