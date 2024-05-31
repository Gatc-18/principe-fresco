import React, { useState } from 'react';
import styled from 'styled-components';
import { products } from '../data/data';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// Styled components with improved styles
const Container = styled.div`
  display: flex;
  padding: 40px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageSection = styled.div`
  display: flex;
  margin-right: 40px;
  align-items: flex-start;
`;

const ThumbnailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 90px;
  cursor: pointer;
  border-radius: 10px;
  object-fit: cover;
  border: ${props => props.isActive ? '2px solid #27ae60' : '2px solid transparent'};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const MainImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
`;

const InfoSection = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Price = styled.div`
  font-size: 24px;
  color: #FF4C13;
  margin-bottom: 20px;
`;

const SizeSection = styled.div`
  margin-bottom: 20px;
`;

const SizeLabel = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  color: #555;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeOption = styled.div`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #27ae60;
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #fff;
  width: 70%;
  background-color: ${props => props.primary ? 'black' : '#FF4C13'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.primary ? 'black' : '#FF4C13'};
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`;


const ProductPage = () => {
  const itemSelected = localStorage.getItem('selectedProductId');
  const product = products.find(item => item.id == itemSelected);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  



  return (
    <>
    <Navbar/>
    <Container>
      <ImageSection>
        <ThumbnailList>
          {product.images.map((image, index) => (
            <Thumbnail 
              key={index} 
              src={image} 
              alt={`${product.title} thumbnail ${index}`} 
              isActive={selectedImage === image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </ThumbnailList>
        <MainImage src={selectedImage} alt={`${product.title} main`} />
      </ImageSection>
      <InfoSection>
        <div>
          <Title>{product.title}</Title>
          <Price>{`$ ${product.price.toFixed(2)}`}</Price>
          <SizeSection>
            <SizeLabel>TALLA</SizeLabel>
            <SizeOptions>
              {product.sizes.map((size, index) => (
                <SizeOption key={index}>{size}</SizeOption>
              ))}
            </SizeOptions>
          </SizeSection>
          <Button primary>AGREGAR AL CARRITO</Button><br/>
          <Button>COMPRARLO YA</Button>
          <Description>{product.description}</Description>
        </div>
      </InfoSection>
    </Container>
    <Footer/>
    </>
  );
};

export default ProductPage;
