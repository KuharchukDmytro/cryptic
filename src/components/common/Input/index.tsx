import { ChangeEventHandler, ComponentPropsWithRef, forwardRef } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { FlexContainer, If } from '..';

import classnames from 'classnames';
import styles from './index.module.scss';

type YupRegistration = Omit<Partial<UseFormRegisterReturn<string>>, 'onChange'>;

type Props = YupRegistration & {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  errors?: FieldErrors;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, errors, className, ...props }, ref) => {
    const id = props.id ?? Math.random().toString(36).slice(2, 15);
    const error = errors?.[props.name ?? '']?.message;

    return (
      <FlexContainer
        direction='column'
        gap={8}
        className={styles.input_wrapper}
        data-error={error}
      >
        <If condition={label}>
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </If>

        <input
          type='text'
          id={id}
          className={classnames(styles.input, className)}
          ref={ref}
          {...props}
        />
      </FlexContainer>
    );
  },
);
