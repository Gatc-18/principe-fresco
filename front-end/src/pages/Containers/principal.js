import React from 'react';
import styled from 'styled-components';
import CoverImage from '../../assets/Images/CoverImage.png'
import { ContainerBackground } from '../../assets/Styles/generalStyles';



const Title = styled.h1`
   font-family: 'Epilogue';
   font-size: 4.5rem;
   line-height: 80px;
   color: #391400;
   font-weight: 900!important;
`

const TextElement = styled.p`
   font-size: 16px;
   font-family: 'Epilogue';
   margin: 24px 0px;
`

const ChildElement = styled.section`
   width: 35.938rem;
   margin-top: ${props => props.main ? "0px" : "150px"};
   @media (max-width: 767px) {
    order: ${props => props.main ? "-1" : "1"}
  }
`

const ImageCake = styled.img`
   width: 95%;
`

const ContainerFather = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   @media (max-width: 767px) {
    justify-content: center;
  }
`

const Principal = () => {

    return (
        <>
            <ContainerFather>
                <ContainerBackground>
                    <ChildElement>
                        <Title>¡Vístete con Estilo, Vive con Pasión!</Title>
                    </ChildElement>
                </ContainerBackground>

                <ChildElement main>
                    <ImageCake src={CoverImage} alt="cover image" />
                </ChildElement>
            </ContainerFather>
        </>
    )

}

export default Principal;