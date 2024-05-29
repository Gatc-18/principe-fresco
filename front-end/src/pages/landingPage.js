import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Principal from './Containers/principal';
import Productos from './Containers/productos';
import Testimonials from './Containers/testimonials';

const LandingPage = () => {

    return (
        <>
            <Navbar />
            <Principal/>
            <Productos/>
            <Testimonials/>
        </>
    )

}

export default LandingPage;