import React, { FC } from 'react';

type Props = {
  condition: unknown;
  children: React.ReactNode;
};

export const If: FC<Props> = ({ condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }

  return null;
};
