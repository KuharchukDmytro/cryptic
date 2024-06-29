import { Message } from './Message';
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
  readonly messages: Message[];
};
