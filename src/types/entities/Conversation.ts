import { ConversationMessage } from './Message';
import { User } from './User';

export type CreateConversationInput = {
  readonly participants: number[];
  readonly isGroupConversation?: boolean;
};

export type Conversation = {
  readonly id: string;
  readonly isGroupConversation: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly participants: User[];
  readonly messages: ConversationMessage[];
};

export type UseConversationReturnType = {
  readonly conversation: Conversation | null;
  readonly reciever: User | null;
};
