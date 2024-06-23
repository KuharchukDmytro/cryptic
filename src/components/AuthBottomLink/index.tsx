import { AppRoutes } from '@/types/core/routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

type Props = {
  text: string;
  linkText: string;
  link: AppRoutes;
};

export const AuthBottomLink: FC<Props> = ({ text, linkText, link }) => {
  return (
    <p className={styles.bottom_text}>
      {text}{' '}
      <Link to={link} className={styles.bottom_text__link}>
        {linkText}
      </Link>
    </p>
  );
};
