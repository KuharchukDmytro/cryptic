import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ToastContainer } from 'react-toastify';

import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />

    <ToastContainer autoClose={3000} position='bottom-left' hideProgressBar />
  </>,
);
