import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../assets/Styles/generalStyles';
import ProductCard from '../../components/ProductCard';
import { productCardInfo } from '../../data/data';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap
`


const Title = styled.h1`
   text-align: center;
   font-family: 'Epilogue';
   font-size: 56px;
   color: black;
   letter-spacing: -1px;
   margin: 50px 0px;
`

const Productos = () => {

    return (

        <MainContainer>
            <Title>Descubre tu estilo, redefine tu presencia</Title>
            <Container>
                {
                    productCardInfo.map(item => {
                        return (
                            <ProductCard data={item} />
                        )
                    })
                }
            </Container>
        </MainContainer>

    )
}

export default Productos