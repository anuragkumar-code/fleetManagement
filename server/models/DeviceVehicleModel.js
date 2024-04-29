const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

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



module.exports = DeviceVehicleMapping;
