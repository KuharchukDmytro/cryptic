import { FC } from 'react';
import { FlexContainer } from '../common/FlexContainer';

type Props = {
  children: React.ReactNode;
};

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <FlexContainer direction='row' gap={20}>
      <main>{children}</main>
    </FlexContainer>
  );
};
