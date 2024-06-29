import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export interface IRequestData {
  url: string;
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  header?: AxiosRequestConfig['headers'];
  prevent?: boolean;
  overrideBaseUrl?: string;
}

export const reduxBaseQueryFunc = (): BaseQueryFn<IRequestData> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async ({ url, method, data, params, header }): Promise<any> => {
    const accessToken = localStorage.getItem('token');
    let headers: AxiosRequestConfig['headers'] = {};

    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`;
    }

    headers['Content-Type'] = 'application/json';

    if (header) {
      headers = { ...headers, ...header };
    }

    console.log('🚀 ~ return ~ headers:', headers);

    try {
      const result = await axios({
        url: import.meta.env.VITE_API_URL + url,
        method: method || 'get',
        data,
        params,
        headers,
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: { status: err.response?.status, results: err.response?.data },
      };
    }
  };
};
