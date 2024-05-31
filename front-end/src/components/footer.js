import React from 'react';
import styled from 'styled-components';
import LogoMain from '../assets/Images/Logo.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  padding: 20px;
  color: white;
`;

const FooterText = styled.p`
  color: #FF4C13; // Color oficial
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #FF4C13; // Color oficial
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin: 30px 0px;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <Logo src={LogoMain} alt="Logo" />
      <IconsContainer>
        <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </IconLink>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
