import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 25%;
    height: 400px;
    padding: 30px;
    border: 1px solid #FEA08C;
    background: white;
    &:hover{
        transform: scale(1.1)
    }
`

const Header = styled.section`
    display: flex;
    align-items: center;
    gap: 50px
`

const Name = styled.h4`
   font-family: Poppins;
   color: black;
`

const Description = styled.p`
   font-family: 'Epilogue';
   line-height: 25px;
   color: black;
`

const TestimonialCard = ({ data }) => {

    const { name, avatar, testimonio } = data;
    return (
        <Container>
            <Header>
                <img src={avatar} alt={name} />
                <Name>{name}</Name>
            </Header>
            <section>
                <Description>{testimonio}</Description>
                <img src="https://i.ibb.co/QD89ngp/star.png" alt="starts" />
            </section>
        </Container>
    )
}

export default TestimonialCard;