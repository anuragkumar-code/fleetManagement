const express = require('express');
const router = express.Router();

//import all controllers here only
const deviceController = require('../controller/deviceController');


// all api's defined after this only
router.get('/devices', deviceController.getDevices);
router.post('/add-device', deviceController.addDevice);

router.get('/devicebyid/:id', deviceController.getDeviceById);
router.get('/devicebyimei/:imei', deviceController.getDeviceByImei);


router.get('/test', async(req,res) => {
    res.send("hello from device routes");
});

module.exports = router;
