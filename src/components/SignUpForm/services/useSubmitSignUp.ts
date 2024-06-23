import { useState } from 'react';
import { authClient } from '@/api/index';
import { useAppDispatch } from '@/redux/store';
import { AppRoutes } from '@/types/core/routes';
import { CreateUserInput } from '@/types/entities/User';
import { userActions } from '@/redux/slices/user';
import { useNavigate } from 'react-router-dom';
import { showErrorMessage } from '@/utils/helpers/showErrorMessage';

export const useSubmitSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitSignUp = async (data: CreateUserInput) => {
    try {
      setIsLoading(true);

      await authClient.signup(data);

      dispatch(
        userActions.update({ email: data.email, username: data.username }),
      );

      window.localStorage.setItem('tempEmail', data.email);

      navigate(AppRoutes.EMAIL_VERIFICATION_PENDING_PAGE);
    } catch (error) {
      showErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, submitSignUp };
};
