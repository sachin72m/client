import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './main.scss';
import { Provider } from 'react-redux';
import store from './store/index.js';


// const root = ReactDOM.createRoot();
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
,

document.getElementById('root')
);

reportWebVitals();
