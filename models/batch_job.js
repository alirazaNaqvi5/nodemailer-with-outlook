const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batch_job', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dry_run: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    pre_processed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    processing_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    failed_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'batch_job',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sqlite_autoindex_batch_job_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
