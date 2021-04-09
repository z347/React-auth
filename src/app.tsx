import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store/root-saga.store';
import MainRouter from './routes';

const App: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>
);

export { App };
