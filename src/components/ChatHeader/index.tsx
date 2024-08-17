import { IconsEnum } from '@/types/core/icons';
import { Button, FlexContainer, SvgIcon } from '../common';
import { useConversation } from '@/hooks/useConversation';

import styles from './index.module.scss';

export const ChatHeader = () => {
  const { reciever } = useConversation();

  return (
    <FlexContainer
      direction='row'
      align='center'
      className={styles.chat_header}
    >
      <img
        src={reciever?.avatarUrl}
        alt='Participant Avatar'
        className={styles.chat_header__avatar}
      />

      <FlexContainer
        gap={2}
        className={styles.chat_header__user_info_container}
      >
        <h4 className={styles.chat_header__username}>{reciever?.username}</h4>

        <p className={styles.chat_header__user_status}>Online</p>
      </FlexContainer>

      <FlexContainer className={styles.chat_header__right_actions_container}>
        <Button fitContent>
          <SvgIcon src={IconsEnum.SEARCH_ICON} />
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};
