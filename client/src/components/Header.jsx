import React from 'react';
import { Layout, Menu } from 'antd';
import '../App.css'
const { Header } = Layout;

function Header() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Donate</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Header;