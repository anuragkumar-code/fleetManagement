// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import DeviceMappingPage from './pages/DeviceMappingPage';
import AddDevicePage from './pages/AddDevicePage';
import AddVehiclePage from './pages/AddVehiclePage';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/device-mapping" component={DeviceMappingPage} />
                    <Route path="/add-device" component={AddDevicePage} />
                    <Route path="/add-vehicle" component={AddVehiclePage} />
                </Routes>
                {/* <HomePage /> */}
            </div>
        </Router>
    );
}

export default App;
