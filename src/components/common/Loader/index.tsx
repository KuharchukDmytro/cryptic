import React, { CSSProperties } from 'react';
import styles from './index.module.scss';

type Props = {
  size?: number;
  color?: string;
};

export const Loader: React.FC<Props> = ({ size = 3.25, color = '#fff' }) => {
  const style = {
    '--loader-size': `${size}em`,
    '--loader-color': color,
  } as CSSProperties;

  return (
    <svg style={style} viewBox='25 25 50 50' className={styles.loader}>
      <circle r='20' cy='50' cx='50' className={styles.loader__circle}></circle>
    </svg>
  );
};
