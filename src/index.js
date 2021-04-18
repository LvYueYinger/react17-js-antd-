/*
 * @Author: your name
 * @Date: 2021-04-13 14:10:55
 * @LastEditTime: 2021-04-15 17:10:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.less';
import App from './App';
import store from '@/store';

import Login from '@/view/login';
import NotFound from '@/view/404';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConfigProvider locale={zhCN}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/404" exact component={NotFound} />
          <Route path="/" render={() => <App />} />
        </Switch>
      </ConfigProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
