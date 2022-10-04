import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { ITEMS } from 'services/item';
import './index.scss';

/**
 * Sidebar options
 * @returns {Component}
 */
const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={ITEMS} />
    </Layout.Sider>
  );
};

export default Sider;
