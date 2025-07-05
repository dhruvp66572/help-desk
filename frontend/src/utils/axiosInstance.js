import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,  // Change to your backend URL
});

// Automatically attach token
axiosinstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosinstance;
