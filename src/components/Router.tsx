import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarDetail from './screens/car-detail/CarDetail';
import Home from './screens/home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/React-TS-app" element={<Home />} />
                <Route path="/React-TS-app/car/:id" element={<CarDetail />} />

                <Route path="*" element={<div>Not found</div>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;