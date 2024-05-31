import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import LogoMain from '../assets/Images/Logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff; /* Blanco */
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const Button = styled(Link)`
  background-color: ${props => props.main ? "#FF4C13" : "transparent" };
  color: ${props => props.main ? "#fff" : "#333" };
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  padding:10px;
  border-radius: 10px;
  margin: 0px 10px;
  font-family: 'Poppins';
  text-decoration: none; 

  &:hover {
    background-color: #FF4C13;
    color: #fff; 
  }
`;

const LogoutButton = styled.button`
  background-color: #FF4C13;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  padding: 10px;
  border-radius: 10px;
  margin: 0px 10px;
  font-family: 'Poppins';
  text-decoration: none;

  &:hover {
    background-color: #cc3a10;
  }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('usuario');

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('selectedProductId');
        navigate('/');
    };

    return (
        <NavbarContainer>
            <LogoLink to={isAuthenticated ? "/dashboard" : "/"}>
                <Logo src={LogoMain} alt="Logo" />
            </LogoLink>
            <div>
                {isAuthenticated ? (
                    <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>
                ) : (
                    <>
                        <Button to="/register">Registrarse</Button>
                        <Button to="/login" main>Iniciar Sesión</Button>
                    </>
                )}
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
