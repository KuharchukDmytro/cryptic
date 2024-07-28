import { ReduxState, ReduxStateList } from '@/types/core/reduxSelector';
import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { conversationApi } from './apiSlices/conversationApi';
import { userApi } from './apiSlices/userApi';

const reducer = combineReducers({
  [conversationApi.reducerPath]: conversationApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const store: Store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      conversationApi.middleware,
      userApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDistinctSelector = <T extends ReduxState>(
  state: T,
): ReduxStateList[T] => {
  return useAppSelector(reduxState => reduxState[state]);
};
