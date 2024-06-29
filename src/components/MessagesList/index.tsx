import { Message } from '../Message';
import { FlexContainer } from '../common';
import styles from './index.module.scss';

const messages = [
  {
    id: 7,
    senderId: 67,
    conversationId: 'dde66986-2e8d-4612-8a67-155c6b599913',
    message: 'Send user 67',
    isEdited: false,
    createdAt: '2024-06-25T22:00:33.826Z',
    updatedAt: '2024-06-25T22:00:33.826Z',
    sender: {
      id: 67,
      email: 'sharaga.dno@gmail.com',
      username: 'uroboros',
      avatarUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
    },
    media: null,
  },
  {
    id: 8,
    senderId: 67,
    conversationId: 'dde66986-2e8d-4612-8a67-155c6b599913',
    message: 'Send user 67',
    isEdited: false,
    createdAt: '2024-06-25T22:01:06.659Z',
    updatedAt: '2024-06-25T22:01:06.659Z',
    sender: {
      id: 67,
      email: 'sharaga.dno@gmail.com',
      username: 'uroboros',
      avatarUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
    },
    media: null,
  },
  {
    id: 9,
    senderId: 67,
    conversationId: 'dde66986-2e8d-4612-8a67-155c6b599913',
    message: 'Send user 67',
    isEdited: false,
    createdAt: '2024-06-29T20:42:53.928Z',
    updatedAt: '2024-06-29T20:42:53.928Z',
    sender: {
      id: 67,
      email: 'sharaga.dno@gmail.com',
      username: 'uroboros',
      avatarUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
    },
    media: null,
  },
];

export const MessagesList = () => {
  return (
    <FlexContainer gap={8} className={styles.messages_list}>
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </FlexContainer>
  );
};
