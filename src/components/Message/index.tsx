import { IconsEnum } from '@/types/core/icons';
import { FlexContainer, SvgIcon } from '../common';
import { convertDate } from '@/utils/helpers/convertDate';
import styles from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Message = (message: any) => {
  return (
    <FlexContainer gap={4} className={styles.message}>
      <FlexContainer className={styles.message__content_container}>
        <p className={styles.message__content}>{message.message}</p>
      </FlexContainer>

      <FlexContainer
        direction='row'
        gap={10}
        align='center'
        className={styles.message__bottom_info}
      >
        <SvgIcon src={IconsEnum.TWO_CHECKMARKS_ICON} />

        <p className={styles.message__send_at}>
          {convertDate(message.createdAt)}
        </p>
      </FlexContainer>
    </FlexContainer>
  );
};
