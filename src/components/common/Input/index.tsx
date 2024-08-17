import { ChangeEventHandler, ComponentPropsWithRef, forwardRef } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { FlexContainer, If, SvgIcon } from '..';

import classnames from 'classnames';
import styles from './index.module.scss';
import { InputVariant } from '@/types/core/componentVariantsEnums';

type YupRegistration = Omit<Partial<UseFormRegisterReturn<string>>, 'onChange'>;

type Props = YupRegistration & {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  variant?: InputVariant;
  icon?: string;
  iconSize?: number;
  label?: string;
  errors?: FieldErrors;
  inputWrapperClassName?: string;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      errors,
      icon,
      iconSize = 24,
      className = '',
      variant = InputVariant.FILL,
      inputWrapperClassName,
      ...props
    },
    ref,
  ) => {
    const id = props.id || Math.random().toString(36).slice(2, 15);
    const error = errors?.[props.name ?? '']?.message;

    return (
      <FlexContainer gap={8} className={inputWrapperClassName}>
        <If condition={label}>
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </If>
        <FlexContainer
          direction='row'
          align='center'
          gap={8}
          className={classnames(
            styles.input_wrapper,
            className,
            styles[`input_wrapper__${variant.toLowerCase()}`],
            {
              [styles.input_wrapper__with_icon]: icon,
            },
          )}
          data-error={error}
        >
          <If condition={icon}>
            <SvgIcon src={icon} className={styles.icon} size={iconSize} />
          </If>

          <input
            type='text'
            id={id}
            className={classnames(styles.input, {
              [styles.input__with_icon]: icon,
            })}
            ref={ref}
            {...props}
          />
        </FlexContainer>
      </FlexContainer>
    );
  },
);
