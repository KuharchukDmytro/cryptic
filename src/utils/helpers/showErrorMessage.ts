import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const showErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    const message = error.response?.data?.message;

    if (Array.isArray(message)) {
      message.forEach(msg => toast.error(msg));

      return;
    }

    toast.error(message);

    return;
  }

  if (error instanceof Error) {
    toast.error(error?.message);

    return;
  }

  toast.error('Something went wrong');
};
