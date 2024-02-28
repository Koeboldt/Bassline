import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Layout className="layout">
      <Footer className="footer">
        ©2024 Bassline Inc. All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default FooterComponent;