import { ChatHeader } from '../ChatHeader';
import { Conversation } from '../Conversation';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

export const Chat = () => {
  return (
    <FlexContainer className={styles.chat}>
      <ChatHeader />

      <Conversation />
    </FlexContainer>
  );
};
