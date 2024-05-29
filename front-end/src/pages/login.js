import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from '../components/Loader';


// Estilos globales
const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const Cover = styled.div`
  flex: 1;
  background-image: url('https://media.gq.com.mx/photos/5f32dd73356b187cffb8443b/master/pass/principe%20del%20rap.jpg'); // Cambia esta ruta por la imagen de tu marca
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  position: relative;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #FF4C13; // Color oficial
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const StyledField = styled(Field)`
  margin-bottom: 20px;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif; 
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif; 
`;

const Button = styled.button`
  padding: 12px 15px;
  font-size: 16px;
  color: white;
  background-color: #FF4C13; 
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif; 
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #cc3a10;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  font-size: 14px;
  color: #FF4C13; 
  background-color: transparent;
  border: 1px solid #FF4C13; 
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif; 
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  &:hover {
    background-color: #FF4C13;
    color: white;
  }
`;

const RegisterText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const StyledLink = styled(Link)`
  color: #FF4C13;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida')
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:58323/api/cliente');
      const usuarios = response.data;
      const usuario = usuarios.find(user => user.Email === values.email && user.Contrasena === values.password);

      if (usuario) {
        setTimeout(() => {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          navigate('/dashboard');
        }, 3000);
      } else {
        setErrors({ api: 'Correo electrónico o contraseña incorrectos.' });
      }

    } catch (error) {
      setErrors({ api: 'Error al iniciar sesión. Por favor, inténtalo de nuevo.' });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <Cover />
      <FormContainer>
        <BackButton to="/">Volver Atrás</BackButton>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting, errors }) => (
            <StyledForm>
              <Title>Iniciar Sesión</Title>
              <StyledField
                type="email"
                name="email"
                placeholder="Correo Electrónico"
              />
              <ErrorMessage name="email" component={ErrorText} />
              <StyledField
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <ErrorMessage name="password" component={ErrorText} />
              {errors.api && <ErrorText>{errors.api}</ErrorText>}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Iniciando...' : 'Login'}
              </Button>
              <RegisterText>
                ¿No tienes cuenta? <StyledLink to="/register">Regístrate aquí</StyledLink>
              </RegisterText>
            </StyledForm>
          )}
        </Formik>
        {loading && <Loader />}
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
