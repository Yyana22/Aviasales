import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducerFiltersTransfers } from './components/store/FiltersTransfers/FiltersTransfersReducer';
import App from './components/App/App';

const store = createStore(reducerFiltersTransfers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
