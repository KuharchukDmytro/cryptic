import {
  BaseQueryFn,
  TypedUseMutation,
  TypedUseMutationResult,
} from '@reduxjs/toolkit/query/react';

export const useUnwrapMutation = <Arg, Result>(
  useBaseMutation: TypedUseMutation<Result, Arg, BaseQueryFn>,
): [
  (arg: Arg) => Promise<Result>,
  TypedUseMutationResult<Result, Arg, BaseQueryFn>,
] => {
  const [trigger, mutationResult] = useBaseMutation();

  const triggerUnwrapped = async (arg: Arg): Promise<Result> => {
    return await trigger(arg).unwrap();
  };

  return [triggerUnwrapped, mutationResult];
};
