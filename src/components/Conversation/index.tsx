import { useConversation } from '@/hooks/useConversation';
import { ConversationInput } from '../ConversationInput';
import { MessagesList } from '../MessagesList';
import { FlexContainer, If } from '../common';

import styles from './index.module.scss';

export const Conversation = () => {
  const { conversation } = useConversation();

  return (
    <FlexContainer className={styles.conversation}>
      <If condition={conversation?.messages}>
        <MessagesList messages={conversation?.messages} />
      </If>

      <ConversationInput />
    </FlexContainer>
  );
};
