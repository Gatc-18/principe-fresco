import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   max-width: 303px
`

const Image = styled.img`
   width: 100%;
`

const ContainerTextHeader = styled.section`
  display: flex;
  justify-content: center;
  font-family: 'Poppins';
  color: black;
`

const FontElement = styled.h2`
  margin: 10px;
  padding: 0px;
`

const ProductCard = ({ data }) => {
    const navigate = useNavigate();
    const { image, id, title, price } = data;

    const handleClick = () => {
        const isAuthenticated = localStorage.getItem('usuario');

        if (isAuthenticated) {
            localStorage.setItem('selectedProductId', id);
            navigate('/product'); 
        }
    };

    return (
        <Container id={id} onClick={handleClick}>
            <Image src={image} alt={title} />
            <ContainerTextHeader>
                <FontElement main>{title}</FontElement>
            </ContainerTextHeader>
            <ContainerTextHeader>
                <FontElement>${price}</FontElement>
            </ContainerTextHeader>
        </Container>
    )
}

export default ProductCard;
