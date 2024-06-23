import { useAuthTokens } from './services/useAuthTokens';

export const HomePage = () => {
  useAuthTokens();

  return <div>Home Page</div>;
};
