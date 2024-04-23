const express = require('express');
const router = express.Router();

//import all controllers here only
const vehicleController = require('../controller/vehicleController');


// all api's defined after this only
router.post('/vehicles', vehicleController.getVehicles);

router.get('/vehicles', vehicleController.getVehicles);
router.post('/add-vehicle', vehicleController.addVehicle);

router.get('/vehiclebyid/:id', vehicleController.getVehicleById);
router.get('/vehiclebyvin/:vin', vehicleController.getVehicleByVin);

router.get('/test', async(req,res) => {
    res.send("hello from vehicle routes");
});

module.exports = router;
