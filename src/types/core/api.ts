import { AxiosError, AxiosResponse } from 'axios';

export type Response<T> = Promise<AxiosResponse<T>>;

export type BasicServerError = {
  statusCode: number;
  timestamp: string;
  path: string;
  messages: string[];
  additional: unknown;
};

export type ServerError = AxiosError<BasicServerError>;
