import { ConversationMessage } from '@/types/entities/Message';
import { Message } from '../Message';
import { FlexContainer } from '../common';

import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  messages: ConversationMessage[];
};

export const MessagesList: FC<Props> = ({ messages }) => {
  return (
    <FlexContainer gap={12} className={styles.messages_list}>
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </FlexContainer>
  );
};
