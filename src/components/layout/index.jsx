import React from 'react';
import { Layout } from 'antd';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import Footer from './footer';
import './index.scss';

/**
 * App Layout
 * @returns {Component} Layout
 */
const AppLayout = () => (
  <Layout className="app-layout">
    <Sidebar />
    <Layout className="site-layout">
      <Header />
      <Content>
        <h1>Hi! 👋 PetShop</h1>
      </Content>
      <Footer />
    </Layout>
  </Layout>
);

export default AppLayout;
