import { authClient } from '@/api/index';
import { useDistinctSelector } from '@/redux/store';
import { ReduxState } from '@/types/core/reduxSelector';
import { AppRoutes } from '@/types/core/routes';
import { showErrorMessage } from '@/utils/helpers/showErrorMessage';
import { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHandleSubmit = () => {
  const { email, username } = useDistinctSelector(ReduxState.USER);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: FormEvent, codeValues: string[]) => {
      e.preventDefault();

      try {
        setIsLoading(true);

        const emailFromLS = window.localStorage.getItem('tempEmail');
        const login = email || username || emailFromLS;

        if (!login) {
          throw new Error('Email or username is required');
        }

        const {
          data: { refreshToken, token },
        } = await authClient.verifyEmail({
          login,
          code: codeValues.join(''),
        });

        window.localStorage.setItem('token', token);
        window.localStorage.setItem('refreshToken', refreshToken);

        window.localStorage.removeItem('tempEmail');

        navigate(AppRoutes.HOME);
      } catch (error) {
        showErrorMessage(error);
      } finally {
        setIsLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [email],
  );

  return { isLoading, handleSubmit };
};
