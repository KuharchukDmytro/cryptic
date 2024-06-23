import { AppRoutes } from '@/types/core/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSyncLocalStorageToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenSync = () => {
      if (
        window.localStorage.getItem('token') &&
        window.localStorage.getItem('refreshToken')
      ) {
        navigate(AppRoutes.HOME);
      }
    };

    const intervalId = setInterval(handleTokenSync, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [navigate]);
};
