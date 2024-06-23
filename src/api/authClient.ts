import {
  CreateUserInput,
  LoginUserInput,
  LoginUserResponse,
  VerifyEmailInput,
  VerifyEmailResponse,
} from '@/types/entities/User';
import { createClient } from './basicClient';
import { Response } from '@/types/core/api';

const authClient = createClient('auth');

export const signup = async (data: CreateUserInput) => {
  return authClient.post('/signup', data);
};

export const login = async (
  data: LoginUserInput,
): Response<LoginUserResponse> => {
  return authClient.post('/signin', data);
};

export const verifyEmail = async (
  data: VerifyEmailInput,
): Response<VerifyEmailResponse> => {
  return authClient.post('/verify-email', data);
};

export const resendEmailVerificationCode = async (
  email: string,
): Response<void> => {
  return authClient.post('/resend-verification-code', {
    email,
  });
};
