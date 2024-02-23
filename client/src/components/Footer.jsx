import React from 'react';
import { Layout } from 'antd';
import '../App.css';

const { Footer } = Layout;

function Footer() {
  return (
    <Layout className="layout">
      <Footer className="footer">
        ©2024 Bassline Inc. All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default Footer;