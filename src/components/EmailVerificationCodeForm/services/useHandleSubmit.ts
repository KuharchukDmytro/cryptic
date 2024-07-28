import { useVerifyEmailMutation } from '@/redux/apiSlices/userApi';
import { useUnwrapMutation } from '@/redux/useUnwrapQuery';
import { AppRoutes } from '@/types/core/routes';
import { processFailedRequest } from '@/utils/helpers/processFailedRequest';
import { FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHandleSubmit = () => {
  const [verifyEmail, { isLoading }] = useUnwrapMutation(
    useVerifyEmailMutation,
  );
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: FormEvent, codeValues: string[]) => {
      e.preventDefault();

      try {
        const emailFromLS = window.localStorage.getItem('tempEmail');
        const login = emailFromLS;

        if (!login) {
          navigate(AppRoutes.SIGNIN);

          return;
        }

        const { data } = await verifyEmail({
          login,
          code: codeValues.join(''),
        });

        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('refreshToken', data.refreshToken);

        window.localStorage.removeItem('tempEmail');

        navigate(AppRoutes.HOME);
      } catch (error) {
        processFailedRequest(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { isLoading, handleSubmit };
};
