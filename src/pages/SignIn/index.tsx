import { AuthBottomLink } from '@/components/AuthBottomLink';
import { AuthLayout } from '@/components/AuthLayout';
import { SignInForm } from '@/components/SignInForm';
import { AppRoutes } from '@/types/core/routes';

export const SignIn = () => {
  return (
    <AuthLayout title='Sign In'>
      <SignInForm />

      <AuthBottomLink
        text='Do not have an account?'
        linkText='Sign Up'
        link={AppRoutes.SIGNUP}
      />
    </AuthLayout>
  );
};
