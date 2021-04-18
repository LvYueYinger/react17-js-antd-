/*
 * @Author: your name
 * @Date: 2021-04-15 17:28:02
 * @LastEditTime: 2021-04-18 11:15:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/layouts/basic-layout/index.js
 */
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

import { PandaIcon } from '@/style/icons';
import BasicLayoutSider from './BasicLayoutSider';
import './index.less';
import { getCurrentRouterParent } from '@/router';
import { useLocation } from 'react-router';

function BasicLayout(params) {
  const location = useLocation();

  const { children, routes } = params;
  const [openKeys, setOpenKeys] = useState(getOpenKeys());
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  useEffect(() => {
    console.log('进来');
    setSelectedKeys([location.pathname]);
    setOpenKeys(getOpenKeys());
  }, [location]);

  function getOpenKeys() {
    const parents = getCurrentRouterParent(location.pathname);
    return parents.map(parent => parent.path);
  }
  return (
    <Layout>
      <Header className="header">
        <div className="header-logo">
          <PandaIcon />
        </div>
      </Header>
      <Layout>
        <Sider width={200} theme={'dark'} className="site-layout-background">
          <BasicLayoutSider
            routes={routes}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onOpenChange={openKeys => setOpenKeys(openKeys)}
          />
        </Sider>
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
