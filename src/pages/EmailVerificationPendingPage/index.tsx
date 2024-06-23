import { EmailVerificationCodeForm } from '@/components/EmailVerificationCodeForm';
import { FlexContainer } from '@/components/common';
import { SvgIcon } from '@/components/common/SvgIcon';
import { IconsEnum } from '@/types/core/icons';
import { useHiddenEmail } from './services/useHiddenEmail';
import { useSyncLocalStorageToken } from './services/useSyncLocalStorageToken';
import styles from './index.module.scss';

export const EmailVerificationPendingPage = () => {
  const email = useHiddenEmail();

  useSyncLocalStorageToken();

  return (
    <FlexContainer
      justify='center'
      align='center'
      className={styles.email_verification_pending_page}
    >
      <FlexContainer
        gap={40}
        align='center'
        className={styles.email_verification_pending_page__container}
      >
        <FlexContainer
          direction='row'
          align='center'
          fitContent
          gap={16}
          className={styles.email_verification_pending_page__top_info}
        >
          <SvgIcon src={IconsEnum.CRYPTIC_LOGO} size={80} color='#083dc5' />

          <h1 className={styles.email_verification_pending_page__title}>
            Cryptic Email Verification
          </h1>
        </FlexContainer>

        <FlexContainer
          gap={20}
          className={styles.email_verification_pending_page__bottom_info}
        >
          <p className={styles.email_verification_pending_page__info}>
            Please enter the verification code we sent to {email} address
          </p>

          <EmailVerificationCodeForm />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
