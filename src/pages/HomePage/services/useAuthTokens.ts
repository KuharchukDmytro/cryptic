import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useAuthTokens = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const refreshToken = searchParams.get('refreshToken');

    if (!token || !refreshToken) {
      return;
    }

    searchParams.delete('token');
    searchParams.delete('refreshToken');

    setSearchParams(searchParams);

    window.localStorage.setItem('token', token);
    window.localStorage.setItem('refreshToken', refreshToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.size]);
};
