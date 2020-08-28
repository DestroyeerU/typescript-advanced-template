import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Router history={history}>
        <Routes />
      </Router>
    </BrowserRouter>
  );
}

export default App;
