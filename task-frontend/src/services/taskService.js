import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';

const authAxios = axios.create({
  baseURL: API_URL,
});

authAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getTasks = () => authAxios.get('/');
export const getTask = (id) => authAxios.get(`/${id}`);
export const createTask = (task) => authAxios.post('/', task);
export const updateTask = (id, task) => authAxios.put(`/${id}`, task);
export const deleteTask = (id) => authAxios.delete(`/${id}`);
