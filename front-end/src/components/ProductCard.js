import React from 'react';
import styled from 'styled-components';

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

    const { image, id, title, price } = data

    return (
        <Container id={id}>
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