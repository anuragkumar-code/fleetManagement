const Device = require('../models/DeviceModel');


const getDevices = async (req, res) => {
    try {
        const devices = await Device.findAll();
        res.status(200).json(devices);
    } catch (error) {
        console.error('Error fetching devices:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const addDevice = async (req, res) => {
    const { name, imei } = req.body;

    try {
        const existingDevice = await Device.findOne({ where: { imei } });
        if (existingDevice) {
            return res.status(400).json({ message: 'Device with this IMEI already exists.' });
        }

        const newDevice = await Device.create({ name, imei });

        res.status(201).json(newDevice);
    } catch (error) {

        console.error('Error adding device:', error);
        res.status(500).json({ message: 'something went wrong' });

    }
};


const getDeviceByImei = async (req, res) => {
    const { imei } = req.params;

    try {
        const device = await Device.findOne({ where: { imei } });

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.status(200).json(device);
    } catch (error) {
        console.error('Error fetching device:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const getDeviceById = async (req, res) => {
    const { id } = req.params;

    try {
        const device = await Device.findByPk(id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.status(200).json(device);
    } catch (error) {
        console.error('Error fetching device:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};



//to export all functions to the router
module.exports = {
    getDevices,
    addDevice,
    getDeviceByImei,
    getDeviceById
};