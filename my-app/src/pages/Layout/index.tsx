import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout as _Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider } = _Layout;
const items = [
    {
      key: '/',
      icon: <UserOutlined />,
      label: '首页',
    },
    {
      key: '/article',
      icon: <VideoCameraOutlined />,
      label: '文章管理',
    },
    {
      key: '/publish',
      icon: <UploadOutlined />,
      label: '创建文章',
    },
  ]

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer},
  } = theme.useToken();

  const onMenuClick = (route: any) => {
    const path = route.key;
    navigate(path);
  }


  return (
    <_Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <_Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <_Layout>
            {/* 二级路由出口 */}
            <Outlet />
        </_Layout>
      </_Layout>
    </_Layout>
  );
};


export default Layout