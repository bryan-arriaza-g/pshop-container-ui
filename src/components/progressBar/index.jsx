import React from 'react';
import { Space, Spin } from 'antd';

/**
 * Progress Loading
 * @returns {Component}
 */
const Progress = () => (
  <Space size="middle">
    <Spin size="large" />
  </Space>
);

export default Progress;
