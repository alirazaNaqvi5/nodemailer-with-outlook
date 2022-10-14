const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('line_item', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cart',
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
    swap_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'swap',
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_return: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_giftcard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    should_merge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    allow_discounts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    has_shipping: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    unit_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variant_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'product_variant',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fulfilled_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    returned_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipped_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'line_item',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_line_item_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_27283ee631862266d0f1c68064",
        fields: [
          { name: "cart_id" },
        ]
      },
      {
        name: "IDX_43a2b24495fe1d9fc2a9c835bc",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "IDX_3fa354d8d1233ff81097b2fcb6",
        fields: [
          { name: "swap_id" },
        ]
      },
      {
        name: "IDX_118e3c48f09a7728f41023c94e",
        fields: [
          { name: "claim_order_id" },
        ]
      },
      {
        name: "IDX_5371cbaa3be5200f373d24e3d5",
        fields: [
          { name: "variant_id" },
        ]
      },
    ]
  });
};
