import { AppRoutes } from '@/types/core/routes';
import { CreateUserInput } from '@/types/entities/User';
import { useNavigate } from 'react-router-dom';
import { processFailedRequest } from '@/utils/helpers/processFailedRequest';
import { useSignupMutation } from '@/redux/apiSlices/userApi';

export const useSubmitSignUp = () => {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();

  const submitSignUp = async (data: CreateUserInput) => {
    try {
      await signup(data);

      window.localStorage.setItem('tempEmail', data.email);

      navigate(AppRoutes.EMAIL_VERIFICATION_PENDING_PAGE);
    } catch (error) {
      processFailedRequest(error);
    }
  };

  return { isLoading, submitSignUp };
};
