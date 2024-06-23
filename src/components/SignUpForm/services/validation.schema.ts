import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .matches(/^[a-z0-9]*$/, 'Unsuported characters')
    .min(5, 'Username must be at least 5')
    .max(16, 'Username must be maximum 16'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8')
    .required('Password is required'),
});
