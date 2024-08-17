import { AppRoutes } from '@/types/core/routes';

export const getCorrectNavigationLink = (
  route: AppRoutes,
  placeholder: string,
  replacementValue: string | number,
): string => {
  return route.replace(placeholder, replacementValue.toString());
};
