import { Chat } from '@/components/Chat';
import { FlexContainer } from '@/components/common';
import { MainSidebar } from '@/components/MainSidebar';
import { useUser } from '@/hooks/useUser';
import { useAuthTokens } from './services/useAuthTokens';
// import { RightSidebar } from '@/components/RightSidebar';

export const HomePage = () => {
  useAuthTokens();
  useUser();

  return (
    <FlexContainer direction='row'>
      <MainSidebar />

      <Chat />

      {/* <RightSidebar /> */}
    </FlexContainer>
  );
};
