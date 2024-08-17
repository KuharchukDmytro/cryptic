import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes, RouteConfig } from '@/types/core/routes';
import { BaseLayout } from '@/components/BaseLayout';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { EmailVerificationPendingPage } from '@/pages/EmailVerificationPendingPage';
import { RequireAuth } from '@/components/common/RequireAuth';
import { ConversationPage } from '@/pages/ConversationPage';

const routeConfigs: RouteConfig[] = [
  {
    route: AppRoutes.DEAFULT,
    component: HomePage,
    isPrivate: true,
    baseLayout: true,
  },
  {
    route: AppRoutes.HOME,
    component: HomePage,
    isPrivate: true,
    baseLayout: true,
  },
  {
    route: AppRoutes.FALLBACK,
    component: NotFoundPage,
    isPrivate: true,
    baseLayout: true,
  },
  {
    route: AppRoutes.SIGNIN,
    component: SignIn,
    isPrivate: true,
    baseLayout: false,
  },
  {
    route: AppRoutes.SIGNUP,
    component: SignUp,
    isPrivate: true,
    baseLayout: false,
  },
  {
    route: AppRoutes.EMAIL_VERIFICATION_PENDING_PAGE,
    component: EmailVerificationPendingPage,
    isPrivate: true,
    baseLayout: false,
  },
  {
    route: AppRoutes.CONVERSATION,
    component: ConversationPage,
    isPrivate: true,
    baseLayout: true,
  },
];

export const router = createBrowserRouter(
  routeConfigs.map(config => {
    const Page = config.component;
    const VerifiedPage = config.isPrivate ? (
      <RequireAuth>
        <Page />
      </RequireAuth>
    ) : (
      <Page />
    );

    if (config.baseLayout) {
      return {
        path: config.route,
        element: <BaseLayout>{VerifiedPage}</BaseLayout>,
      };
    }

    return {
      path: config.route,
      element: VerifiedPage,
    };
  }),
);
