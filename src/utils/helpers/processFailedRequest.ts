import { ServerError, BasicServerError } from '@/types/core/api';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const processFailedRequest = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error?.status === 401 || error?.status === 403) {
      return;
    }

    if (isBasicServerError(error)) {
      error.response?.data.messages.forEach((message: string) =>
        toast.error(message),
      );

      return;
    }
  }

  toast.error('Something went wrong');
};

export const isBasicServerError = (error: unknown): error is ServerError => {
  const path = ((error as AxiosError)?.response?.data as BasicServerError)
    ?.path;

  return Boolean(path);
};

export const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError)?.isAxiosError;
};
