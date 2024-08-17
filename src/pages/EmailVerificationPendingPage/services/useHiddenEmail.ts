import { useEffect, useState } from 'react';

export const useHiddenEmail = () => {
  const [hiddenEmail, setHiddenEmail] = useState('');

  useEffect(() => {
    const emailFromLs = window.localStorage.getItem('tempEmail');

    if (!emailFromLs) {
      setHiddenEmail('your');

      return;
    }

    const [emailPrefix, emailProvider] = emailFromLs.split('@');

    const unhiddenEmailPart = emailPrefix.slice(0, 3);
    const hiddenEmailPart = emailPrefix.slice(3).replace(/./g, '*');

    setHiddenEmail(`${unhiddenEmailPart}${hiddenEmailPart}@${emailProvider}`);
  }, []);

  return hiddenEmail;
};
