import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
//引入store 
import {store} from '../src/store/index'
//引入provider 
import {Provider} from 'react-redux'
React.Component.prototype.axios = axios;
ReactDOM.render(
  <React.StrictMode>
  {/* Provider 包裹根组件，值为store */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
