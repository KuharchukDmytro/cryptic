import { Conversation } from '@/types/entities/Conversation';
import { convertDate } from '@/utils/helpers/convertDate';
import { FC } from 'react';
import { FlexContainer, If } from '../common';

import { useUser } from '@/hooks/useUser';
import classnames from 'classnames';
import styles from './index.module.scss';

type Props = Conversation;

export const ConversationItem: FC<Props> = ({ id, participants, messages }) => {
  const user = useUser();
  const other = participants.filter(p => p.id !== user.id)[0];
  const lastMessage = messages[messages.length - 1];

  return (
    <FlexContainer
      direction='row'
      align='center'
      gap={8}
      className={classnames(styles.conversation_item, {
        [styles.conversation_item__selected]: id === '213',
      })}
    >
      <img
        src={other.avatarUrl}
        alt='User Icon'
        className={styles.conversation_item__avatar}
      />

      <FlexContainer>
        <h5 className={styles.conversation_item__username}>{other.username}</h5>

        <p className={styles.conversation_item__msg_text}>
          {lastMessage?.message}
        </p>
      </FlexContainer>

      <p className={styles.conversation_item__time}>
        <If condition={lastMessage}>
          {convertDate(lastMessage?.createdAt || '')}
        </If>
      </p>
    </FlexContainer>
  );
};
