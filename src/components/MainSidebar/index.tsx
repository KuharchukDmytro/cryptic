import { AllChatsSidebar } from '../AllChatsSidebar';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

export const MainSidebar = () => {
  return (
    <FlexContainer className={styles.main_sidebar}>
      <AllChatsSidebar />
    </FlexContainer>
  );
};
