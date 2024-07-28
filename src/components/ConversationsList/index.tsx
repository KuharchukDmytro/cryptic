import { useGetAllConversationsQuery } from '@/redux/apiSlices/conversationApi';
import { ConversationItem } from '../ConversationItem';
import { FlexContainer, If, Loader } from '../common';

export const ConversationsList = () => {
  const { data, isLoading, isError } = useGetAllConversationsQuery();

  return (
    <FlexContainer gap={16}>
      <If condition={isLoading}>
        <Loader size={2} color='red' />
      </If>

      <If condition={data?.data?.length}>
        {data?.data?.map(item => (
          <ConversationItem key={Math.random()} {...item} />
        ))}
      </If>

      <If condition={!isError && !isLoading && !data?.data?.length}>
        You have no conversations yet
      </If>
    </FlexContainer>
  );
};
