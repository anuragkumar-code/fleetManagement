// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const DevicesTable = () => {

    // const devices = [
    //     { id: 1, name: 'Device 1', imei: 'IMEI123' },
    //     { id: 2, name: 'Device 2', imei: 'IMEI456' }
    // ];

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = async () => {
        try {
            const response = await fetch('http://localhost:4000/api-device/devices');
            if (!response.ok) {
                throw new Error('Failed to fetch devices');
            }
            const data = await response.json();
            setDevices(data);
        } catch (error) {
            console.error('Error fetching devices:', error);
        }
    };

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <h2>Registered Devices</h2>
                </div>
                <div className='col-md-6' style={{ textAlign: 'right' }}>
                    {/* <button className="btn btn-primary" style={{ float: 'inline-end' }}> + Add Device</button> */}
                    <NavLink className="btn btn-primary" to="/add-device">+ Add Device</NavLink>

                </div>
            </div>
            {devices.length === 0 ? (
                <p>No data found</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Device Name</th>
                            <th>Device IMEI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.map((device,index) => (
                            <tr key={device.id}>
                                <td>{index+1}</td>
                                <td>{device.name}</td>
                                <td>{device.imei}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DevicesTable;
