export type User = {
  readonly id: number;
  readonly username: string;
  readonly email: string;
  readonly avatarUrl: string;
};

export type CreateUserInput = Omit<User, 'id'> & {
  readonly password: string;
};

export type LoginUserInput = {
  readonly login: string;
  readonly password: string;
};

export type LoginUserResponse = {
  readonly token: string;
  readonly refreshToken: string;
} & {
  user: User;
};

export type VerifyEmailInput = {
  readonly code: string;
  readonly login: string;
};

export type VerifyEmailResponse = {
  readonly token: string;
  readonly refreshToken: string;
};
