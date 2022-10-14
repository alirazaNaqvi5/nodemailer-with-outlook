const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_collection_sessions', {
    payment_collection_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'payment_collection',
        key: 'id'
      }
    },
    payment_session_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'payment_session',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment_collection_sessions',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_payment_collection_sessions_1",
        unique: true,
        fields: [
          { name: "payment_collection_id" },
          { name: "payment_session_id" },
        ]
      },
      {
        name: "IDX_7f79702e8678103b162a423968",
        fields: [
          { name: "payment_collection_id" },
        ]
      },
      {
        name: "IDX_f00d25bf199b9a212d93c26249",
        fields: [
          { name: "payment_session_id" },
        ]
      },
    ]
  });
};
