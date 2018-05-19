/**
 * Packages
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/**
 * Containers
 */
import { Todolist } from './containers';

/**
 * Reducers
 */
import reducers from './reducers';

/**
 * Services
 */
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Todolist />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
