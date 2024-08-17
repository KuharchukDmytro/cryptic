import { IconsEnum } from '@/types/core/icons';
import { FlexContainer, If, SvgIcon } from '../common';
import { convertDate } from '@/utils/helpers/convertDate';
import { ConversationMessage } from '@/types/entities/Message';
import { useUser } from '@/hooks/useUser';

import classnames from 'classnames';
import styles from './index.module.scss';

export const Message = (message: ConversationMessage) => {
  const { id } = useUser();
  const isUserSender = message.senderId === id;

  return (
    <FlexContainer
      gap={4}
      className={classnames(styles.message, {
        [styles.message__user_sender]: isUserSender,
      })}
    >
      <FlexContainer
        direction='row'
        gap={12}
        className={styles.message__content_container}
      >
        <p className={styles.message__content}>{message.message}</p>

        <FlexContainer
          direction='row'
          align='flex-end'
          className={styles.message__bottom_info}
        >
          <FlexContainer direction='row' align='center' gap={4}>
            <p className={styles.message__send_at}>
              {convertDate(message.createdAt)}
            </p>

            <If condition={isUserSender}>
              <SvgIcon src={IconsEnum.TWO_CHECKMARKS_ICON} size={16} />
            </If>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
