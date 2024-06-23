import { ConversationsList } from '../ConversationsList';
import { SearchInput } from '../SearchInput';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

export const AllChatsSidebar = () => {
  return (
    <FlexContainer gap={32} className={styles.all_chats_sidebar}>
      <h3 className={styles.all_chats_sidebar__title}>All chats</h3>

      <SearchInput callback={() => {}} />

      <ConversationsList />
    </FlexContainer>
  );
};
