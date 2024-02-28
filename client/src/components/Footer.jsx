import React from 'react';
import { Layout } from 'antd';
import { row, col } from 'antd';

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Layout className="layout">
      <row justify="center">
        <Footer className="footer">
          ©2024 Bassline Inc. All Rights Reserved.
        </Footer>
      </row>
    </Layout>
  );
}

export default FooterComponent;