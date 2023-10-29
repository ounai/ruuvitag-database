const { Sequelize, DataTypes } = require('sequelize');

let sequelize = null;
let RuuviTagData = null;
let RuuviTagHistoricalData = null;

const getDatabaseConnection = async options => {
  if (sequelize === null) {
    sequelize = new Sequelize(options);

    RuuviTagData = sequelize.define('RuuviTagData', {
      tagId: {
        type: DataTypes.STRING(12),
        allowNull: false,
        primaryKey: true
      },
      dataFormat: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rssi: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      temperature: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      humidity: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      pressure: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accelerationX: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accelerationY: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accelerationZ: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      battery: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      txPower: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      movementCounter: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      measurementSequenceNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mac: {
        type: DataTypes.STRING(17),
        allowNull: false
      }
    }, { timestamps: true });

    RuuviTagHistoricalData = sequelize.define('RuuviTagHistoricalData', {
      tagId: {
        type: DataTypes.STRING(12),
        allowNull: false
      },
      dataFormat: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rssi: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      temperature: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      humidity: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      pressure: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accelerationX: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accelerationY: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      accelerationZ: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      battery: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      txPower: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      movementCounter: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      measurementSequenceNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mac: {
        type: DataTypes.STRING(17),
        allowNull: false
      }
    }, { timestamps: true });
  }

  return { RuuviTagData, RuuviTagHistoricalData };
};

module.exports = {
  getDatabaseConnection
};
