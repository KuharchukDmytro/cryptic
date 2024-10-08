import { IconsEnum } from '@/types/core/icons';
import { ConversationsList } from '../ConversationsList';
import { SearchInput } from '../SearchInput';
import { FlexContainer, SvgIcon } from '../common';
import styles from './index.module.scss';

export const AllConversationsSidebar = () => {
  return (
    <FlexContainer className={styles.all_chats_sidebar}>
      <FlexContainer
        direction='row'
        align='center'
        gap={8}
        className={styles.all_chats_sidebar__header}
      >
        <SvgIcon src={IconsEnum.CRYPTIC_LOGO} size={52} color='#083dc5' />

        <SearchInput callback={() => {}} />
      </FlexContainer>

      <FlexContainer
        className={styles.all_chats_sidebar__conversations_wrapper}
      >
        <ConversationsList />
      </FlexContainer>
    </FlexContainer>
  );
};
