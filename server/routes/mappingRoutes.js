const express = require('express');
const router = express.Router();
const deviceVehicleMappingController = require('../controller/deviceVehicleMappingController');

// Route for mapping a device to a vehicle
router.post('/map-device-to-vehicle', deviceVehicleMappingController.mapDeviceToVehicle);
router.get('/mapped', deviceVehicleMappingController.getDeviceVehicleMappings);


router.get('/test', async(req,res) => {
    res.send("hello from mapping routes");
});


module.exports = router;
