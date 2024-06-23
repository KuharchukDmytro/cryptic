import axios from 'axios';

export const createClient = (baseUrl: string) => {
  const client = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/${baseUrl}`,
  });

  client.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return client;
};
