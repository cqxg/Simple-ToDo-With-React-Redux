import React from 'react';
import ReactDOM from 'react-dom';
import App from './todo_app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './todo_app/store';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
