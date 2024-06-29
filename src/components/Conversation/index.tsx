import { ConversationInput } from '../ConversationInput';
import { MessagesList } from '../MessagesList';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

export const Conversation = () => {
  return (
    <FlexContainer className={styles.conversation}>
      <MessagesList />

      <ConversationInput />
    </FlexContainer>
  );
};
