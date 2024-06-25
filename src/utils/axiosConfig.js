import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', 
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

// Interceptor para incluir el token en cada petición
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // O la forma en que almacenes el token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
