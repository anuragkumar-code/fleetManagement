import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VehiclesTable = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await fetch('http://localhost:4000/api-vehicle/vehicles');
            if (!response.ok) {
                throw new Error('Failed to fetch vehicles');
            }
            const data = await response.json();
            setVehicles(data);
        } catch (error) {
            console.error('Error fetching vehicles:', error);
        }
    };

    return (
        <div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <h2>Mapped Vehicles & Devices</h2>
                </div>
                <div className='col-md-6'>
                    <Link to="/add-vehicle" className="btn btn-primary" style={{ float: 'inline-end' }}> + Add Vehicle</Link>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle VIN</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle,index) => (
                        <tr key={vehicle.id}>
                            <td>{index+1}</td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.vin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehiclesTable;
