// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://education-backend-jxtk.onrender.com/api",
  // baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("teacherToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
