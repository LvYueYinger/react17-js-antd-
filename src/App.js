/*
 * @Author: your name
 * @Date: 2021-04-13 14:10:55
 * @LastEditTime: 2021-04-16 16:28:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/App.js
 */
import React from 'react';
import { ConfigProvider } from 'antd';
import { BlankLayout, BasicLayout } from '@/layouts';
import './App.less';
import { routes, renderRoutes } from '@/router';

function App() {
  return (
    <div className="App">
      <ConfigProvider renderEmpty={BlankLayout}>
        <BasicLayout routes={routes}>{renderRoutes(routes)}</BasicLayout>
      </ConfigProvider>
    </div>
  );
}

export default App;
