import { IconsEnum } from '@/types/core/icons';
import { Button, FlexContainer, Input, SvgIcon } from '../common';
import styles from './index.module.scss';

export const ConversationInput = () => {
  return (
    <FlexContainer
      className={styles.conversation_input}
      direction='row'
      gap={16}
    >
      <Input
        placeholder='Enter your message'
        className={styles.conversation_input__input}
      />

      <Button className={styles.conversation_input__send_button}>
        <SvgIcon src={IconsEnum.SEND_ICON} />
      </Button>
    </FlexContainer>
  );
};
