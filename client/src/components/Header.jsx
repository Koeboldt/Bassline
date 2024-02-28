import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Header } = Layout;

function HeaderComponent() {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/profile'>Profile</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/search'>Search</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/loginsignup'>Login/Sign up</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default HeaderComponent;