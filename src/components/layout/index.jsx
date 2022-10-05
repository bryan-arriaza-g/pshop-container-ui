import React from 'react';
import { Layout } from 'antd';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import Footer from './footer';
import './index.scss';

/**
 * App Layout
 * @param {Component} children children elements
 * @returns {Component} Layout
 */
const AppLayout = ({ children }) => (
  <Layout className="app-layout">
    <Sidebar />
    <Layout className="site-layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  </Layout>
);

export default AppLayout;
