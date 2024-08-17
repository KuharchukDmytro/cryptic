import { FlexContainer } from '@/components/common';
import { useAuthTokens } from './services/useAuthTokens';
// import { RightSidebar } from '@/components/RightSidebar';

import styles from './index.module.scss';

export const HomePage = () => {
  useAuthTokens();

  return (
    <FlexContainer justify='center' align='center' className={styles.home_page}>
      <p className={styles.home_page__title}>
        Select conversation to start chatting
      </p>
    </FlexContainer>
  );
};
