import { AllConversationsSidebar } from '../AllConversationsSidebar';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

export const MainSidebar = () => {
  return (
    <FlexContainer className={styles.main_sidebar}>
      <AllConversationsSidebar />
    </FlexContainer>
  );
};
