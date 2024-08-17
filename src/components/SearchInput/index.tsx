import { FC } from 'react';
import { Input } from '../common';
import { IconsEnum } from '@/types/core/icons';
import { InputVariant } from '@/types/core/componentVariantsEnums';
import styles from './index.module.scss';

type Props = {
  callback: () => void;
};

export const SearchInput: FC<Props> = ({ callback }) => {
  return (
    <Input
      onChange={callback}
      placeholder='Search for username'
      icon={IconsEnum.SEARCH_ICON}
      variant={InputVariant.DEFAULT}
      className={styles.search_input}
    />
  );
};
