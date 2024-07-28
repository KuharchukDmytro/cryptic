import { reduxBaseQueryFunc } from '@/api/reduxBaseQueryFunc';
import {
  CreateUserInput,
  LoginUserInput,
  LoginUserResponse,
  User,
  VerifyEmailInput,
  VerifyEmailResponse,
} from '@/types/entities/User';
import { createApi } from '@reduxjs/toolkit/query/react';
import { AxiosResponse } from 'axios';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: reduxBaseQueryFunc(),
  endpoints: builder => ({
    signup: builder.mutation({
      query: (data: CreateUserInput) => ({
        url: '/auth/signup',
        method: 'POST',
        data,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            userApi.util.updateQueryData('getMe', data?.email, () => {
              return data;
            }),
          );
        } catch {
          return;
        }
      },
    }),
    signin: builder.mutation<AxiosResponse<LoginUserResponse>, LoginUserInput>({
      query: data => ({
        url: '/auth/signin',
        method: 'POST',
        data,
      }),
    }),
    verifyEmail: builder.mutation<
      AxiosResponse<VerifyEmailResponse>,
      VerifyEmailInput
    >({
      query: data => ({
        url: '/auth/verify-email',
        method: 'POST',
        data,
      }),
    }),
    resendEmailVerificationCode: builder.mutation<void, string>({
      query: email => ({
        url: '/auth/resend-verification-code',
        method: 'POST',
        data: {
          email,
        },
      }),
    }),
    getMe: builder.query<AxiosResponse<User>, string>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useVerifyEmailMutation,
  useResendEmailVerificationCodeMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
} = userApi;
