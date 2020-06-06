import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import uiReducer from './store/reducers/ui';
import orderReducer from './store/reducers/order';
import currentBurgerReducer from './store/reducers/currentBurger';
import { BrowserRouter } from 'react-router-dom';

const reducer = combineReducers({
  ui: uiReducer,
  order: orderReducer,
  currentBurger : currentBurgerReducer,
});

const store = createStore(reducer)
ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter basename='progetti/burgerbuilder'>
        <App />  
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
