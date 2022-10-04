import React from 'react';
import { Layout } from 'antd';
import './index.scss';

/**
 * Header
 * @returns {Component}
 */
const Header = () => (
  <Layout.Header
    className="site-layout-background header-layout"
    style={{
      padding: 0,
    }}
  />
);

export default Header;
