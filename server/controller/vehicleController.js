const Vehicle = require('../models/VehicleModel');

const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const addVehicle = async (req, res) => {
    const { vin, name } = req.body;

    try {
        const existingVehicle = await Vehicle.findOne({ where: { vin } });
        if (existingVehicle) {
            return res.status(400).json({ message: 'Vehicle with this VIN already exists.' });
        }

        const newVehicle = await Vehicle.create({ vin, name });

        res.status(201).json(newVehicle);
    } catch (error) {
        console.error('Error adding vehicle:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const getVehicleByVin = async (req, res) => {
    const { vin } = req.params;

    try {
        const vehicle = await Vehicle.findOne({ where: { vin } });

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const getVehicleById = async (req, res) => {
    const { id } = req.params;

    try {
        const vehicle = await Vehicle.findByPk(id);

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = {
    getVehicles,
    addVehicle,
    getVehicleByVin,
    getVehicleById
};