/*
 * @Author: your name
 * @Date: 2021-04-16 15:10:24
 * @LastEditTime: 2021-04-18 11:09:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/layouts/basic-layout/BasicLayoutSider.js
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function BasicLayoutSider(params) {
  const { routes = [], openKeys = [], onOpenChange, selectedKeys } = params; //, openKeys, onOpenChange

  function getRenderChildrenMenu(children) {
    return children.filter(item => {
      return item.hideInMenu !== true;
    });
  }
  function renderMenu(routes) {
    return routes.map(route => {
      if (route.hideInMenu) {
        return null;
      }
      if (route.children && route.children.length) {
        //看看是不是有“不”需要隐藏的二级路由，如果有则显渲染一级路由，再渲染二级路由
        const renderRouteMenu = getRenderChildrenMenu(route.children);
        if (renderRouteMenu.length > 0) {
          return (
            <SubMenu
              key={route.path}
              title={
                <>
                  {route.icon && <route.icon />}
                  <span>{route.title}</span>
                </>
              }
            >
              {renderMenu(route.children)}
            </SubMenu>
          );
        } else {
          renderMenu(route.children);
        }
      }
      return (
        <Menu.Item key={route.path}>
          <Link to={{ pathname: route.path }}>
            <>
              {route.icon && <route.icon />}
              <span>{route.title}</span>
            </>
          </Link>
        </Menu.Item>
      );
    });
  }
  return (
    <Menu
      mode="inline"
      theme={'dark'}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
    >
      {renderMenu(routes)}
    </Menu>
  );
}
