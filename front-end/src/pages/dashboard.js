import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Productos from './Containers/productos';


const Dashboard = () => {

  return (
    <>
      <Navbar />
      <Productos />
      <Footer />
    </>
  );
};

export default Dashboard;
