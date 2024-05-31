import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard'; 
import PrivateRoute from './privateRoutes';
import ProductPage from '../pages/Producto';

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} /> 
        <Route path="/product" element={<PrivateRoute element={ProductPage} />} /> 
      </Routes>
    </>
  );
}

export default AppRoute;
