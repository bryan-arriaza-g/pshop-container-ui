import React from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

/**
 * Sidebar options
 * @param {String} label label text
 * @param {String} key unique key
 * @param {Element} icon icon ui
 * @param {Component} children sub-element list
 * @returns {Component}
 */
export const getItem = (label, key, icon, children) => ({
  key,
  icon,
  children,
  label,
});

/**
 * Sidebar options
 * @returns {Array} menu options
 */
export const ITEMS = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export default { getItem };
