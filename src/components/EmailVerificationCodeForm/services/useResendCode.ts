import { authClient } from '@/api/index';
import { useDistinctSelector } from '@/redux/store';
import { ReduxState } from '@/types/core/reduxSelector';
import { AppRoutes } from '@/types/core/routes';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useResendCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { email } = useDistinctSelector(ReduxState.USER);
  const navigate = useNavigate();

  const getRemainingTime = () => {
    const endTime = localStorage.getItem('endTime');
    const remainingTime = endTime
      ? Math.floor((Number(endTime) - Date.now()) / 1000)
      : null;
    return remainingTime && remainingTime > 0 ? remainingTime : null;
  };

  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  const buttonText = remainingTime ? `${remainingTime} seconds` : 'Resend code';

  const handleClick = async () => {
    try {
      const emailFromLS = localStorage.getItem('tempEmail');

      if (!email && !emailFromLS) {
        navigate(AppRoutes.SIGNIN);

        return;
      }

      setIsLoading(true);

      await authClient.resendEmailVerificationCode(
        email || (emailFromLS as string),
      );

      const endTime = Date.now() + 60000;
      localStorage.setItem('endTime', endTime.toString());
      setRemainingTime(60);
    } catch (error) {
      toast.error('Failed to resend code');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let intervalId: number;

    if (remainingTime) {
      intervalId = window.setInterval(() => {
        const newRemainingTime = getRemainingTime();
        setRemainingTime(newRemainingTime);

        if (!newRemainingTime) {
          clearInterval(intervalId);
          localStorage.removeItem('endTime');
        }
      }, 1000);
    }

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [remainingTime]);

  return {
    buttonText,
    handleClick,
    isLoading,
    isDisabled: remainingTime !== null,
  };
};
