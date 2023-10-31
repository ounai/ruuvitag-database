const { Sequelize, DataTypes } = require('sequelize');

let sequelize = null;
let RuuviTagData = null;
let RuuviTagHistoricalData = null;

const getDatabaseConnection = async options => {
  if (sequelize === null) {
    let _sequelize = new Sequelize(options);

    RuuviTagData = _sequelize.define('RuuviTagData', {
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

    RuuviTagHistoricalData = _sequelize.define('RuuviTagHistoricalData', {
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

    await _sequelize.sync();

    sequelize = _sequelize;
  }

  return { RuuviTagData, RuuviTagHistoricalData };
};

module.exports = {
  getDatabaseConnection
};
