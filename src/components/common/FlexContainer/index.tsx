import { CSSProperties, ComponentPropsWithoutRef, FC } from 'react';

import styles from './index.module.scss';
import classnames from 'classnames';

type Props = ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
  gap?: number;
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  fitContent?: boolean;
  extraStyles?: CSSProperties;
  className?: string;
};

export const FlexContainer: FC<Props> = ({
  children,
  gap,
  direction,
  align,
  justify,
  extraStyles,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames(styles.flex_container, className, {
        [styles.flex_container__fit_content]: props.fitContent,
      })}
      data-gap={gap}
      data-direction={direction}
      data-justify={justify}
      data-align={align}
      style={extraStyles}
      {...props}
    >
      {children}
    </div>
  );
};
