import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout as _Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = _Layout;

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <_Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '首页',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '文章管理',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '创建文章',
            },
          ]}
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