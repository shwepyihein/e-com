import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'; 
import { createStore ,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './redux/root-reducer';

const middlewares=[logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App/>  
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


