import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = () => (
  <LoaderContainer>
    Cargando...
  </LoaderContainer>
);

export default Loader;
