import { ReduxState, ReduxStateList } from '@/types/core/reduxSelector';
import {
  combineReducers,
  Store,
  configureStore,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import userReducer from './slices/user';
import { conversationApi } from './apiSlices/conversationApi';

const reducer = combineReducers({
  user: userReducer,
  [conversationApi.reducerPath]: conversationApi.reducer,
});

const store: Store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      createSerializableStateInvariantMiddleware(),
      conversationApi.middleware,
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
