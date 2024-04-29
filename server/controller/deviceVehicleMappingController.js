const Device = require('../models/DeviceModel');
const Vehicle = require('../models/VehicleModel');
const DeviceVehicleMapping = require('../models/DeviceVehicleModel');

const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const getDeviceVehicleMappings = async (req, res) => {
    try {
        const query = `SELECT devicevehiclemappings.id, devices.name AS device_name, vehicles.name AS vehicle_name FROM devicevehiclemappings INNER JOIN
            devices ON devicevehiclemappings.deviceId = devices.id INNER JOIN vehicles ON devicevehiclemappings.vehicleId = vehicles.id`;

        const mappedDevicesAndVehicles = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });

        res.status(200).json(mappedDevicesAndVehicles);
    } catch (error) {
        console.error('Error fetching mapped devices and vehicles:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};



const mapDeviceToVehicle = async (req, res) => {
    const { deviceId, vehicleId } = req.body;

    try {

        const device = await Device.findByPk(deviceId);
        if (!device) {
            return res.status(400).json({ message: 'device not found with this id' });
        }

        const vehicle = await Vehicle.findByPk(vehicleId);
        if (!vehicle) {
            return res.status(400).json({ message: 'vehicle not found with this id' });
        }

        const existingDeviceMapping = await DeviceVehicleMapping.findOne({
            where: {
                deviceId
            }
        });

        if (existingDeviceMapping) {
            return res.status(400).json({ message: 'device already mapped with vehicle' });
        }

        const existingVehicleMapping = await DeviceVehicleMapping.findOne({
            where: {
                vehicleId
            }
        });

        if (existingVehicleMapping) {
            return res.status(400).json({ message: 'vehicle already mapped device' });
        }

        const newMapping = await DeviceVehicleMapping.create({ deviceId, vehicleId });

        res.status(201).json(newMapping);
    } catch (error) {
        console.error('Error mapping device to vehicle:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = {
    mapDeviceToVehicle,
    getDeviceVehicleMappings
};
