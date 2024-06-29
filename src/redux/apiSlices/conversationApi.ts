import { reduxBaseQueryFunc } from '@/api/reduxBaseQueryFunc';
import { Conversation } from '@/types/entities/Conversation';
import { createApi } from '@reduxjs/toolkit/query/react';

export const conversationApi = createApi({
  reducerPath: 'conversationApi',
  baseQuery: reduxBaseQueryFunc(),
  endpoints: builder => ({
    createConversation: builder.mutation({
      query: ({ participants, ...rest }) => ({
        url: '/conversation/create',
        method: 'POST',
        data: { participants, ...rest },
      }),
    }),
    getAllConversations: builder.query<Conversation[], void>({
      query: () => ({
        url: '/conversation/all',
        method: 'GET',
      }),
    }),
    getConversationById: builder.query({
      query: id => ({
        url: `/conversation/${id}`,
        method: 'GET',
      }),
    }),
    updateConversation: builder.mutation({
      query: ({ id, participants, ...rest }) => ({
        url: `/conversation/${id}`,
        method: 'PATCH',
        data: { participants, ...rest },
      }),
    }),
    deleteConversation: builder.mutation<string, void>({
      query: id => ({
        url: `/conversation/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateConversationMutation,
  useGetAllConversationsQuery,
  useGetConversationByIdQuery,
  useUpdateConversationMutation,
  useDeleteConversationMutation,
  useLazyGetAllConversationsQuery,
  useLazyGetConversationByIdQuery,
} = conversationApi;
