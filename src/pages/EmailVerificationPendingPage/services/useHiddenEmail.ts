import { useDistinctSelector } from '@/redux/store';
import { ReduxState } from '@/types/core/reduxSelector';
import { useEffect, useState } from 'react';

export const useHiddenEmail = () => {
  const { email } = useDistinctSelector(ReduxState.USER);
  const [hiddenEmail, setHiddenEmail] = useState('');

  useEffect(() => {
    if (!email) {
      setHiddenEmail('your');

      return;
    }

    const [emailPrefix, emailProvider] = email.split('@');

    const unhiddenEmailPart = emailPrefix.slice(0, 3);
    const hiddenEmailPart = emailPrefix.slice(3).replace(/./g, '*');

    setHiddenEmail(`${unhiddenEmailPart}${hiddenEmailPart}@${emailProvider}`);
  }, [email]);

  return hiddenEmail;
};
