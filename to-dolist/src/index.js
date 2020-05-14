import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
//enables connected states
import {Provider} from 'react-redux';
//combines states into one
import {createStore} from 'redux';
import rootReducer from './reducers'


const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);