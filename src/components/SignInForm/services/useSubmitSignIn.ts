import { authClient } from '@/api/index';
import { userActions } from '@/redux/slices/user';
import { useAppDispatch } from '@/redux/store';
import { AppRoutes } from '@/types/core/routes';
import { LoginUserInput } from '@/types/entities/User';
import { showErrorMessage } from '@/utils/helpers/showErrorMessage';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSubmitSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleError = (error: unknown, login: string) => {
    if (error instanceof AxiosError) {
      if (!error.response?.data) {
        return;
      }

      const { statusCode, message } = error.response.data;

      if (statusCode === 400 && message === 'Email not verified') {
        if (login.includes('@')) {
          dispatch(userActions.update({ email: login }));
        } else {
          dispatch(userActions.update({ username: login }));
        }

        navigate(AppRoutes.EMAIL_VERIFICATION_PENDING_PAGE);

        return;
      }
    }

    showErrorMessage(error);
  };

  const submitSignIn = async (data: LoginUserInput) => {
    try {
      const {
        data: { user, token, refreshToken },
      } = await authClient.login(data);

      dispatch(userActions.update(user));

      window.localStorage.setItem('token', token);
      window.localStorage.setItem('refreshToken', refreshToken);

      navigate(AppRoutes.HOME);
    } catch (error) {
      handleError(error, data.login);
    } finally {
      setIsLoading(false);
    }
  };

  return { submitSignIn, isLoading };
};
