import { AppRoutes } from '@/types/core/routes';
import { FC, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const RequireAuth: FC<Props> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const isTokenAvailable = Boolean(
    (localStorage.getItem('token') && localStorage.getItem('refreshToken')) ||
      (searchParams.has('token') && searchParams.has('refreshToken')),
  );
  const isSignUpPage =
    window.location.pathname === AppRoutes.SIGNUP ||
    window.location.pathname === AppRoutes.SIGNIN ||
    window.location.pathname === AppRoutes.EMAIL_VERIFICATION_PENDING_PAGE;

  if (isSignUpPage && isTokenAvailable) {
    window.location.href = AppRoutes.HOME;

    return null;
  }

  if (isSignUpPage && !isTokenAvailable) {
    return <>{children}</>;
  }

  if (isTokenAvailable) {
    return <>{children}</>;
  }

  window.location.href = AppRoutes.SIGNUP;

  return null;
};
