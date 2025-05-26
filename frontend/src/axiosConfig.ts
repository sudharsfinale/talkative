// src/axiosConfig.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7000/api', // Automatically prepended to all requests
  // You can add headers if needed:
  // headers: {
  //   Authorization: `Bearer ${yourToken}`,
  // },
});

export default axiosInstance;