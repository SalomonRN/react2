import React, { useState } from 'react';
import axios from '../utils/axiosConfig'; 
import imagen from '../images/logologin.png';
import '../css/login.css';
import Google from './Google';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/login/', formData)
      .then(response => {
        console.log('Inicio de sesión completado', response.data);
        
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.error('Error :c', error);
      });
  };

  return (
    <div className='container'>
        <div className='login-container'>
            <div className='image-container'>
                <img src={imagen} alt='Imagen' className='image' />
            </div>
            <div className='form-container'>
                <h1 className='title'>Inicio de sesión</h1>
                <input type='text' className='input' placeholder='Correo Electrónico' />
                <input type='password' className='input' placeholder='Contraseña' />
                <button className='button'>Ingresar</button>
                <Google />
                <span className='register-link'>¿Aún no tienes una cuenta?</span>
            </div>
        </div>     
    </div>
  );
};

export default Login;
