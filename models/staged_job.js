const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staged_job', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'staged_job',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_staged_job_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
