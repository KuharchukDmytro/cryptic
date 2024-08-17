import { useUser } from '@/hooks/useUser';
import { AllConversationsSidebar } from '../AllConversationsSidebar';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

export const MainSidebar = () => {
  useUser();

  return (
    <FlexContainer className={styles.main_sidebar}>
      <AllConversationsSidebar />
    </FlexContainer>
  );
};
