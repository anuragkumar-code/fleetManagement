const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');


const sequelize = new Sequelize(config.development);

const Vehicle = sequelize.define('Vehicle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    vin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = Vehicle;