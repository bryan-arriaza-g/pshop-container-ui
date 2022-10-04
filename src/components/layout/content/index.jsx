import React from 'react';
import { Layout } from 'antd';

/**
 * Content Layout
 * @returns {Component}
 */
const Content = ({ children }) => (
  <Layout.Content
    style={{
      margin: '0 16px',
    }}
  >
    <div
      className="site-layout-background content-layout"
      style={{
        padding: 24,
        minHeight: 360,
      }}
    >
      {children}
    </div>
  </Layout.Content>
);

export default Content;
