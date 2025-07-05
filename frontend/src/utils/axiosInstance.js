import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api'; // Fallback to local URL if env variable is not set

const axiosinstance = axios.create({
  baseURL: `${backendUrl}/api`,
});

// Automatically attach token
axiosinstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosinstance;
