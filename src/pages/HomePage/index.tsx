import { FlexContainer } from '@/components/common';
import { useAuthTokens } from './services/useAuthTokens';
import { MainSidebar } from '@/components/MainSidebar';
import { Chat } from '@/components/Chat';
// import { RightSidebar } from '@/components/RightSidebar';

export const HomePage = () => {
  useAuthTokens();

  return (
    <FlexContainer direction='row'>
      <MainSidebar />

      <Chat />

      {/* <RightSidebar /> */}
    </FlexContainer>
  );
};
