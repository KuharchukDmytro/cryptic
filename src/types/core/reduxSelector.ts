import { User } from '../entities/User';

export enum ReduxState {
  USER = 'user',
}

export type ReduxStateList = {
  user: User;
};
