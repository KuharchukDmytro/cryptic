import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FlexContainer, Input } from '../common';
import { Button, ButtonVariants } from '../common/Button';
import { useSubmitSignUp } from './services/useSubmitSignUp';
import { schema } from './services/validation.schema';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { submitSignUp, isLoading } = useSubmitSignUp();

  return (
    <form onSubmit={handleSubmit(submitSignUp)}>
      <FlexContainer gap={48}>
        <FlexContainer gap={24}>
          <Input
            label='Username'
            placeholder='Ella'
            type='text'
            errors={errors}
            disabled={isLoading}
            {...register('username')}
          />

          <Input
            label='Email'
            placeholder='example@gmail.com'
            type='email'
            errors={errors}
            disabled={isLoading}
            {...register('email')}
          />

          <Input
            label='Password'
            placeholder='Enter your password'
            type='password'
            errors={errors}
            disabled={isLoading}
            {...register('password')}
          />
        </FlexContainer>

        <Button
          variant={ButtonVariants.PRIMARY}
          isLoading={isLoading}
          type='submit'
        >
          Sign Up
        </Button>
      </FlexContainer>
    </form>
  );
};
