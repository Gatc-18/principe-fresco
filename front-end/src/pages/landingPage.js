import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Principal from './Containers/principal';
import Productos from './Containers/productos';
import Testimonials from './Containers/testimonials';
import Footer from '../components/footer';

const LandingPage = () => {

    return (
        <>
            <Navbar />
            <Principal/>
            <Productos/>
            <Testimonials/>
            <Footer/>
        </>
    )

}

export default LandingPage;