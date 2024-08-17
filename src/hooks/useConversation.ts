import { useGetAllConversationsQuery } from '@/redux/apiSlices/conversationApi';
import {
  Conversation,
  UseConversationReturnType,
} from '@/types/entities/Conversation';
import { processFailedRequest } from '@/utils/core/processFailedRequest';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from './useUser';

export const useConversation = (
  conversationId?: string,
): UseConversationReturnType => {
  const { data, isError, error } = useGetAllConversationsQuery();
  const user = useUser();
  const paramsConversationId = useParams()?.id;

  useEffect(() => {
    if (!isError) {
      return;
    }

    processFailedRequest(error);
  }, [isError, error]);

  const conversation = useMemo(
    () =>
      data?.data?.find(
        (conversation: Conversation) =>
          conversation.id === (conversationId ?? paramsConversationId),
      ),
    [conversationId, data, paramsConversationId],
  );

  const reciever = useMemo(
    () =>
      conversation?.participants?.find(
        participant => participant.id !== user.id,
      ),
    [conversation, user],
  );

  return { conversation: conversation ?? null, reciever: reciever ?? null };
};
