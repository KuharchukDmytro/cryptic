import { FC } from 'react';
import { FlexContainer } from '../common';
import styles from './index.module.scss';
import classnames from 'classnames';

type Props = {
  item: number;
};

export const ConversationItem: FC<Props> = ({ item }) => {
  return (
    <FlexContainer
      direction='row'
      gap={8}
      className={classnames(styles.conversation_item, {
        [styles.conversation_item__selected]: item === 1,
      })}
    >
      <img
        src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        alt='User Icon'
        className={styles.conversation_item__avatar}
      />

      <FlexContainer>
        <h5 className={styles.conversation_item__username}>Daria</h5>

        <p className={styles.conversation_item__msg_text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          officiis libero necessitatibus voluptatum. Aliquam cupiditate in
          maiores praesentium obcaecati quis.
        </p>
      </FlexContainer>

      <FlexContainer>
        <p className={styles.conversation_item__time}>12:35 pm</p>
      </FlexContainer>
    </FlexContainer>
  );
};
