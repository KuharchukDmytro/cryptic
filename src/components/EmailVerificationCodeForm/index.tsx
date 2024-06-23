import {
  Button,
  ButtonVariants,
  FlexContainer,
  Input,
} from '@/components/common';
import { useVerificationCode } from './services/useVerificationCode';
import styles from './index.module.scss';
import { useHandleSubmit } from './services/useHandleSubmit';
import { useResendCode } from './services/useResendCode';

export const EmailVerificationCodeForm = () => {
  const { codeNumbers, inputRefs, handleChange } = useVerificationCode();
  const { handleSubmit, isLoading } = useHandleSubmit();
  const {
    handleClick,
    buttonText,
    isLoading: isLoadingResendCode,
    isDisabled,
  } = useResendCode();

  return (
    <form onSubmit={e => handleSubmit(e, codeNumbers)}>
      <FlexContainer gap={16}>
        <FlexContainer
          direction='row'
          justify='center'
          align='center'
          gap={8}
          className={styles.email_verification_form__input}
        >
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <Input
                value={codeNumbers[index]}
                onChange={e => handleChange(e, index)}
                maxLength={6}
                className={styles.email_verification_form__input__item}
                ref={el => (inputRefs.current[index] = el)}
                autoFocus={index === 0}
                key={index}
              />
            ))}
        </FlexContainer>

        <Button
          variant={ButtonVariants.PRIMARY}
          type='submit'
          isLoading={isLoading}
        >
          Verify code
        </Button>

        <Button
          variant={ButtonVariants.SECONDARY}
          type='button'
          onClick={handleClick}
          disabled={isDisabled}
          isLoading={isLoadingResendCode}
        >
          {buttonText}
        </Button>
      </FlexContainer>
    </form>
  );
};
