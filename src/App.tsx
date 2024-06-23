import { router } from '@/configs/router';
import { ThemeProvider } from '@/contexts/theme';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'react-toastify/dist/ReactToastify.css';
import './main.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
