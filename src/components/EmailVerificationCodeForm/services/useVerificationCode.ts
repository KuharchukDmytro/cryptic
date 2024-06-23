import { useState, useRef, ChangeEvent } from 'react';

export const useVerificationCode = () => {
  const [codeNumbers, setCodeNumbers] = useState(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = event.target;

    if (!value) {
      setCodeNumbers(prev => {
        const newValue = [...prev];
        newValue[index] = '';

        return newValue;
      });

      const prevInput = inputRefs.current[index - 1];

      if (prevInput) {
        prevInput.focus();
      }

      return;
    }

    if (value && !/^\d+$/.test(value)) {
      return;
    }

    setCodeNumbers(prev => {
      const newValue = [...prev];
      const splittedValue = value.split('');

      if (index === 5) {
        newValue[index] = value.slice(-1);

        return newValue;
      }

      let tempIndex = index;

      splittedValue.forEach(value => {
        newValue[tempIndex] = value;

        tempIndex += 1;
      });

      return newValue;
    });

    if (value.length === 6) {
      inputRefs.current[5]?.focus?.();

      return;
    }

    if (value) {
      const nextInput = inputRefs.current[index + 1];

      if (nextInput) {
        nextInput.focus();
      }
    } else {
      const prevInput = inputRefs.current[index - 1];

      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return {
    codeNumbers,
    inputRefs,
    handleChange,
  };
};
