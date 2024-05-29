import React from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../assets/Styles/generalStyles';
import TestimonialCard from '../../components/TestimonialsCards';
import { users } from '../../data/data';

const Container = styled.div`
   text-align: center

`
const Title = styled.h1`
   text-align: center;
   font-family: 'Epilogue';
   font-size: 56px;
   color: black;
   letter-spacing: -1px;
   margin: 50px 0px;
`

const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top:50px;
`

const Testimonials = () => {


    return (
        <MainContainer>
            <Container>
                <Title>Lo Que Nuestros Clientes Piensan</Title>
                <ContainerCards>
                    {
                        users.map(item => {
                            return (
                                <TestimonialCard data={item} />
                            )

                        })
                    }
                </ContainerCards>
            </Container>
        </MainContainer>
    )
}

export default Testimonials;