import { useResendEmailVerificationCodeMutation } from '@/redux/apiSlices/userApi';
import { AppRoutes } from '@/types/core/routes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useResendCode = () => {
  const navigate = useNavigate();
  const [resendEmailVerificationCode, { isLoading }] =
    useResendEmailVerificationCodeMutation();

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

      if (!emailFromLS) {
        navigate(AppRoutes.SIGNIN);

        return;
      }

      await resendEmailVerificationCode(emailFromLS);

      const endTime = Date.now() + 60000;
      localStorage.setItem('endTime', endTime.toString());
      setRemainingTime(60);
    } catch (error) {
      toast.error('Failed to resend code');
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
