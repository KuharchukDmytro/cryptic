import { useGetAllConversationsQuery } from '@/redux/apiSlices/conversationApi';
import { ConversationItem } from '../ConversationItem';
import { FlexContainer } from '../common';

export const ConversationsList = () => {
  const { data: conversations } = useGetAllConversationsQuery();

  console.log('🚀 ~ ConversationsList ~ conversations:', conversations);

  return (
    <FlexContainer gap={16}>
      {conversations?.map(item => (
        <ConversationItem key={Math.random()} {...item} />
      ))}
    </FlexContainer>
  );
};
