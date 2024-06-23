import { ConversationItem } from '../ConversationItem';
import { FlexContainer } from '../common';

export const ConversationsList = () => {
  return (
    <FlexContainer gap={16}>
      {[1, 2, 3].map(item => (
        <ConversationItem key={Math.random()} item={item} />
      ))}
    </FlexContainer>
  );
};
