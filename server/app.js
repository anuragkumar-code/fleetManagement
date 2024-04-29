const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

const deviceRoutes = require('./routes/deviceRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const mappingRoutes = require('./routes/mappingRoutes');


const app = express();
const PORT = process.env.NODE_SERVER_PORT;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Fleet Management API!');
});

app.use('/api-device', deviceRoutes);
app.use('/api-vehicle', vehicleRoutes);
app.use('/api-mapping', mappingRoutes);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  logging: (msg) => {
    console.log('SQL Logs :', msg);
  }, 
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
});  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
