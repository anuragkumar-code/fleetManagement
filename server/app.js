const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const deviceRoutes = require('./routes/deviceRoutes');
const vehiceRoutes = require('./routes/vehicleRoutes');


const app = express();
const PORT = process.env.NODE_SERVER_PORT;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Fleet Management API!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
