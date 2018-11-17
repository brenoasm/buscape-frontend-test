import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from './reducers';

import AppContainer from './containers/AppContainer';

const store = createStore(combinedReducers, {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
, document.getElementById('root'));
