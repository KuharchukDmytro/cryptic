import { ComponentPropsWithRef, FC } from 'react';
import { If, Loader } from '..';
import classnames from 'classnames';
import styles from './index.module.scss';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type Props = {
  variant?: 'primary' | 'secondary';
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fitContent?: boolean;
} & ComponentPropsWithRef<'button'>;

export const Button: FC<Props> = ({
  variant,
  text,
  icon,
  iconPosition,
  isLoading = false,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={classnames(
        styles.button,
        styles[`button__${variant}`],
        className,
        {
          [styles.button__disabled]: props.disabled,
          [styles.button__fit_content]: props.fitContent,
        },
      )}
      onClick={isLoading ? undefined : onClick}
      {...props}
    >
      <If condition={icon && iconPosition === 'left'}>{icon}</If>

      <If condition={!isLoading && children}>{children}</If>
      <If condition={!isLoading && text}>{text}</If>
      <If condition={isLoading}>
        <Loader
          size={2}
          color={variant === ButtonVariants.PRIMARY ? '#fff' : '#083dc5'}
        />
      </If>

      <If condition={icon && iconPosition === 'right'}>{icon}</If>
    </button>
  );
};
