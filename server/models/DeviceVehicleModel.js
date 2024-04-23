const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const Device = require('./DeviceModel');
const Vehicle = require('./VehicleModel');

const sequelize = new Sequelize(config.development);

const DeviceVehicleMapping = sequelize.define('DeviceVehicleMapping', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    deviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Device', 
            key: 'id',
        },
    },
    vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Vehicle',
            key: 'id',
        },
    },
});

DeviceVehicleMapping.belongsTo(Device, { foreignKey: 'deviceId' });
DeviceVehicleMapping.belongsTo(Vehicle, { foreignKey: 'vehicleId' });

module.exports = DeviceVehicleMapping;
