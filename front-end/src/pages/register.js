import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from '../components/Loader';

// Estilos globales
const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Poppins', sans-serif; // Fuente oficial
`;

const Cover = styled.div`
  flex: 1;
  background-image: url('https://vader.news/__export/1638151473597/sites/gadgets/img/2021/11/28/el_prxncipe_del_rap1_la_famosa_escena_improvisada_por_will_smith_en_el_episodio_piloto.jpeg_1712864702.jpeg'); // Cambia esta ruta por la imagen de tu marca
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

const Input = styled(Field)`
  margin-bottom: 10px;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif; 
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
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

const LoginText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins', sans-serif; 
`;

const LoaderContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

// Esquema de validación
const validationSchema = Yup.object({
  nombre: Yup.string()
    .required('El nombre es obligatorio'),
  direccion: Yup.string()
    .required('La dirección es obligatoria'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('La confirmación de la contraseña es obligatoria'),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    try {
      let userObjt = {
        Nombre: values.nombre,
        Direccion: values.direccion,
        Email: values.email,
        Contrasena: values.password,
        idRol: "2",
        idMoneda: "1"
      }

      const response = await axios.post('http://localhost:58323/api/cliente', userObjt);
      localStorage.setItem('usuario', JSON.stringify(userObjt));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <Cover />
      <FormContainer>
        <Formik
          initialValues={{
            nombre: '',
            direccion: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Title>Registrarse</Title>
              <Input type="text" name="nombre" placeholder="Nombre" />
              <ErrorMessage name="nombre" component={ErrorText} />
              <Input type="text" name="direccion" placeholder="Dirección" />
              <ErrorMessage name="direccion" component={ErrorText} />
              <Input type="email" name="email" placeholder="Correo Electrónico" />
              <ErrorMessage name="email" component={ErrorText} />
              <Input type="password" name="password" placeholder="Contraseña" />
              <ErrorMessage name="password" component={ErrorText} />
              <Input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" />
              <ErrorMessage name="confirmPassword" component={ErrorText} />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Registrando...' : 'Registrarse'}
              </Button>
              <LoginText>
                ¿Ya tienes cuenta? <Link style={{ textDecoration: 'none', color: "#FF4C13" }} to="/login">Inicia sesión aquí</Link>
              </LoginText>
              {loading && <Loader />}
            </StyledForm>
          )}
        </Formik>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
