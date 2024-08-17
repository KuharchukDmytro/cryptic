import { toast } from 'react-toastify';

export const safeParse = (json: string) => {
  if (!json) {
    return null;
  }

  try {
    return JSON.parse(json);
  } catch (error) {
    window.console.log('🚀 stringify error', json);

    toast.error('Unexpected error occured!');

    return '';
  }
};
