import { useSigninMutation } from '@/redux/apiSlices/userApi';
import { useUnwrapMutation } from '@/redux/useUnwrapQuery';
import { AppRoutes } from '@/types/core/routes';
import { LoginUserInput } from '@/types/entities/User';
import {
  isBasicServerError,
  processFailedRequest,
} from '@/utils/core/processFailedRequest';
import { useNavigate } from 'react-router-dom';

export const useSubmitSignIn = () => {
  const navigate = useNavigate();
  const [signin, { isLoading }] = useUnwrapMutation(useSigninMutation);

  const handleError = (error: unknown) => {
    if (isBasicServerError(error)) {
      if (!error.response?.data) {
        return;
      }

      const { statusCode, messages } = error.response.data;

      if (
        statusCode === 400 &&
        messages.some(msg => msg === 'Email not verified')
      ) {
        navigate(AppRoutes.EMAIL_VERIFICATION_PENDING_PAGE);

        return;
      }
    }

    processFailedRequest(error);
  };

  const submitSignIn = async (data: LoginUserInput) => {
    try {
      const {
        data: { token, refreshToken },
      } = await signin(data);

      window.localStorage.setItem('token', token);
      window.localStorage.setItem('refreshToken', refreshToken);

      navigate(AppRoutes.HOME);
    } catch (error) {
      handleError(error);
    }
  };

  return { submitSignIn, isLoading };
};
