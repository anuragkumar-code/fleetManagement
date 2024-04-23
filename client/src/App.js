// App.js

import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';

import DevicePage from './pages/DevicePage';
import AddDevicePage from './pages/AddDevicePage';

import VehiclePage from './pages/VehiclePage';

function App() {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<><Navbar /><HomePage/></>
        },
        {
            path:'/devices',
            element:<><Navbar /><DevicePage/></>
        },
        {
            path:'/vehicles',
            element:<><Navbar /><VehiclePage/></>
        },
        {
            path:'/add-device',
            element:<><Navbar /><AddDevicePage/></>
        }

    ])
    return (
        <RouterProvider router={router} />
    );
}

export default App;
