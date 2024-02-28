import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Layout className="layout">
      <Row justify="center">
        <Col className="footer">
          ©2024 Bassline Inc. All Rights Reserved.
        </Col>
      </Row>
    </Layout>
  );
}

export default FooterComponent;