export enum AppRoutes {
  DEAFULT = '/',
  HOME = '/home',
  FALLBACK = '*',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  EMAIL_VERIFICATION_PENDING_PAGE = '/email-verification-pending',
}

export type RouteConfig = {
  route: AppRoutes;
  component: () => JSX.Element;
  isPrivate: boolean;
  baseLayout: boolean;
};
