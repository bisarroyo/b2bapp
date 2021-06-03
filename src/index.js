import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router/Router';
import store from './store/store';

const container = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  container,
);
