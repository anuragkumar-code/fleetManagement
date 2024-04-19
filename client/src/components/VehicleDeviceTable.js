import React from 'react';
import { Link } from 'react-router-dom';

const VehicleDeviceTable = () => {

    const vehicles = [
        { id: 1, name: 'Vehicle 1', vin: 'VIN123' },
        { id: 2, name: 'Vehicle 2', vin: 'VIN456' }
    ];

    const devices = [
        { id: 1, name: 'Device 1', imei: 'IMEI123' },
        { id: 2, name: 'Device 2', imei: 'IMEI456' }
    ];

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <h2>Mapped Vehicles and Devices</h2>
                </div>
                <div className='col-md-6'>
                    <Link to="/device-mapping" className="btn btn-primary" style={{ float: 'inline-end' }}>Map Devices to Vehicles</Link>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vehicle Name</th>
                        <th>Vehicle VIN</th>
                        <th>Device Name</th>
                        <th>Device IMEI</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.vin}</td>
                            <td>{devices[0].name}</td>
                            <td>{devices[0].imei}</td>
                            <td>View | Edit</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleDeviceTable;
