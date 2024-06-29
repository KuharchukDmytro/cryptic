import { IconsEnum } from '@/types/core/icons';
import { Button, FlexContainer, SvgIcon } from '../common';
import styles from './index.module.scss';

export const ChatHeader = () => {
  return (
    <FlexContainer
      direction='row'
      align='center'
      className={styles.chat_header}
    >
      <img
        src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        alt='Participant Avatar'
        className={styles.chat_header__avatar}
      />

      <FlexContainer
        gap={2}
        className={styles.chat_header__user_info_container}
      >
        <h4 className={styles.chat_header__username}>Daria</h4>

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
