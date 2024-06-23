import * as yup from 'yup';

export const schema = yup.object().shape({
  login: yup.string().required('Login is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8')
    .required('Password is required'),
});
