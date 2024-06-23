import { AuthLayout } from '@/components/AuthLayout';
import { SignUpForm } from '@/components/SignUpForm';
import { AppRoutes } from '@/types/core/routes';

import { AuthBottomLink } from '@/components/AuthBottomLink';

export const SignUp = () => {
  return (
    <AuthLayout title='Sign Up'>
      <SignUpForm />

      <AuthBottomLink
        text='Already have an account?'
        linkText='Sign In'
        link={AppRoutes.SIGNIN}
      />
    </AuthLayout>
  );
};
