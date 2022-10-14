const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idempotency_key', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    idempotency_key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    locked_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    request_method: {
      type: DataTypes.STRING,
      allowNull: true
    },
    request_params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    request_path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    response_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    response_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recovery_point: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "started"
    }
  }, {
    sequelize,
    tableName: 'idempotency_key',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_idempotency_key_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_a421bf4588d0004a9b0c0fe84f",
        unique: true,
        fields: [
          { name: "idempotency_key" },
        ]
      },
    ]
  });
};
