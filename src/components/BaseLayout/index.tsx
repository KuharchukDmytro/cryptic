import { FC } from 'react';
import { FlexContainer } from '../common/FlexContainer';
import { MainSidebar } from '../MainSidebar';

import styles from './index.module.scss';

type Props = {
  children: React.ReactNode;
};

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <FlexContainer direction='row' className={styles.base_layout}>
      <MainSidebar />

      <main>{children}</main>
    </FlexContainer>
  );
};
