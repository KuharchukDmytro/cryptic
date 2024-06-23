import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FlexContainer, Input } from '../common';
import { Button, ButtonVariants } from '../common/Button';
import { useSubmitSignIn } from './services/useSubmitSignIn';
import { schema } from './services/validation.schema';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { submitSignIn, isLoading } = useSubmitSignIn();

  return (
    <form onSubmit={handleSubmit(submitSignIn)}>
      <FlexContainer gap={48}>
        <FlexContainer gap={24}>
          <Input
            label='Username or email'
            placeholder='Ella'
            type='text'
            errors={errors}
            {...register('login')}
          />

          <Input
            label='Password'
            placeholder='Enter your password'
            type='password'
            errors={errors}
            {...register('password')}
          />
        </FlexContainer>

        <Button
          variant={ButtonVariants.PRIMARY}
          type='submit'
          isLoading={isLoading}
        >
          Sign Up
        </Button>
      </FlexContainer>
    </form>
  );
};
