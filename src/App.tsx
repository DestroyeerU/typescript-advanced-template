import React from 'react';

import { BrowserRouter, Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { store, persistor } from './store';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <BrowserRouter>
          <Router history={history}>
            <Routes />
          </Router>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
