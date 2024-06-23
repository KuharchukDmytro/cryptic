import { FC } from 'react';
import { FlexContainer } from '../common';
import { signUpCover } from '@/assets/images';

import styles from './index.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <FlexContainer direction='row' className={styles.auth_layout}>
      <FlexContainer
        align='center'
        justify='center'
        className={styles.auth_layout__left_side}
      >
        <FlexContainer className={styles.auth_layout__left_side_container}>
          <h1 className={styles.auth_layout__title}>{title}</h1>

          {children}
        </FlexContainer>
      </FlexContainer>

      <img
        src={signUpCover}
        alt='Auth Cover Image'
        className={styles.auth_layout__right_side}
      />
    </FlexContainer>
  );
};
