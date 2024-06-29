export type Message = {
  id: number;
  senderId: number;
  conversationId: string;
  message: string;
  isEdited: boolean;
  createdAt: string;
  updatedAt: string;
};
