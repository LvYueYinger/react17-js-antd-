/*
 * @Author: your name
 * @Date: 2021-04-13 14:10:55
 * @LastEditTime: 2021-04-13 14:42:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '@/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
