/*
 * @Author: your name
 * @Date: 2021-04-15 17:34:53
 * @LastEditTime: 2021-04-18 11:23:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-react-learn/src/router/index.js
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import BlankLayout from '@/layouts/blank-layout';
import Level from '@/view/home/level';
import LevelAdd from '@/view/home/level/add';
import Other from '@/view/home/other';
import OtherAdd from '@/view/home/other/add';
import Role from '@/view/permission/role';
import RoleAdd from '@/view/permission/role/add';
import User from '@/view/permission/user';
import UserAdd from '@/view/permission/user/add';

export const routes = [
  {
    id: 1,
    pid: 0,
    path: '/',
    title: '首页',
    exact: true,
    hideInMenu: true,
    redirect: '/home/level',
  },
  {
    id: 2,
    pid: 0,
    path: '/home',
    title: '首页',
    hideInMenu: false,
    component: BlankLayout,
    children: [
      {
        id: 21,
        pid: 2,
        path: '/home/level',
        title: 'home-level-out',
        component: BlankLayout,
        children: [
          {
            id: 211,
            pid: 21,
            path: '/home/level',
            title: 'home-level',
            exact: true,
            hideInMenu: true,
            component: Level,
          },
          {
            id: 212,
            pid: 21,
            path: '/home/level/add',
            title: 'home-level-add',
            exact: true,
            hideInMenu: true,
            component: LevelAdd,
          },
        ],
      },
      {
        id: 22,
        pid: 2,
        path: '/home/other',
        title: 'home-other-out',
        exact: true,
        component: BlankLayout,
        children: [
          {
            id: 221,
            pid: 22,
            path: '/home/other',
            title: 'home-other',
            exact: true,
            hideInMenu: true,
            component: Other,
          },
          {
            id: 222,
            pid: 22,
            path: '/home/other/add',
            title: 'home-other-add',
            exact: true,
            hideInMenu: true,
            component: OtherAdd,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    pid: 0,
    path: '/permission',
    title: '权限页',
    hideInMenu: false,
    component: BlankLayout,
    children: [
      {
        id: 31,
        pid: 3,
        path: '/permission/user',
        title: 'permission-user-out',
        component: BlankLayout,
        children: [
          {
            id: 311,
            pid: 31,
            path: '/permission/user',
            title: 'permission-user',
            exact: true,
            hideInMenu: true,
            component: User,
          },
          {
            id: 312,
            pid: 31,
            path: '/permission/user/add',
            title: 'permission-user-add',
            exact: true,
            hideInMenu: true,
            component: UserAdd,
          },
        ],
      },
      {
        id: 32,
        pid: 3,
        path: '/permission/role',
        title: 'permission-role-out',
        exact: true,
        component: BlankLayout,
        children: [
          {
            id: 321,
            pid: 32,
            path: '/permission/role',
            title: 'permission-role',
            exact: true,
            hideInMenu: true,
            component: Role,
          },
          {
            id: 322,
            pid: 32,
            path: '/permission/role/add',
            title: 'permission-role-add',
            exact: true,
            hideInMenu: true,
            component: RoleAdd,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    pid: 0,
    path: '/single',
    title: 'single',
    hideInMenu: false,
    component: BlankLayout,
    children: [
      {
        id: 41,
        pid: 4,
        path: '/single',
        title: 'single',
        component: BlankLayout,
        hideInMenu: true,
        children: [
          {
            id: 411,
            pid: 41,
            path: '/single',
            title: 'single',
            exact: true,
            hideInMenu: true,
            component: User,
          },
        ],
      },
    ],
  },
];

//将树结构扁平化
function flattenDeepRoutes(routes, routesList) {
  routes.forEach(route => {
    routesList.push(route);
    if (route.children) {
      flattenDeepRoutes(route.children, routesList);
    }
  });
  return routesList;
}

let routeMap = flattenDeepRoutes(routes, []);

//寻找当前路由的父路由（传进来需要获取父路由的的子路由，传出去所有的父路由（包括父路由，祖路由，且按照这种顺序））
export function getCurrentRouterParent(pathname) {
  const target = routeMap.find(route => route.path === pathname); //获取当前路由，携带了其他信息
  let pIds = [];
  if (target) {
    const getParent = pid => {
      if (pid !== 0) {
        //父路由
        const parent = routeMap.find(route => route.id === pid);
        if (parent) {
          pIds.push(parent);
          getParent(parent.pid);
        }
      }
    };
    getParent(target.pid);
  }
  pIds = pIds.reverse();
  return pIds;
}

export function RouteWithSubRoutes(route) {
  const { children } = route;

  return children && children.length ? (
    <Route
      render={() => <route.component>{renderRoutes(children)}</route.component>}
    />
  ) : (
    <Route>
      {route.redirect ? <Redirect to={route.redirect} /> : <route.component />}
    </Route>
  );
}

export function renderRoutes(routes) {
  return (
    <Switch>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
}
