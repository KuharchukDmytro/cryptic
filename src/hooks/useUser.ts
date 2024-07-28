import { useGetMeQuery } from '@/redux/apiSlices/userApi';
import { processFailedRequest } from '@/utils/helpers/processFailedRequest';
import { useEffect } from 'react';

type UseGetMeQueryParams = Parameters<typeof useGetMeQuery>;
type UseGetMeQueryOptions = UseGetMeQueryParams[1];

export const useUser = (options?: UseGetMeQueryOptions) => {
  const { data, isError, error } = useGetMeQuery(
    window.localStorage.getItem('tempEmail'),
    options as unknown,
  );

  useEffect(() => {
    if (!isError) {
      return;
    }

    processFailedRequest(error);
  }, [isError, error]);

  return (
    data?.data ?? {
      id: 0,
      email: '',
      username: '',
      avatarUrl: '',
    }
  );
};
