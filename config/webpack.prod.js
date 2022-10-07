/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const PORT = 3000;
const DOMAIN_AUTH = 'http://localhost:5000';
const DOMAIN_USERS = 'http://localhost:3001';

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash].js',
    publicPath: `http://localhost:${PORT}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'containerRemoteEntry.js',
      remotes: {
        auth: `auth@${DOMAIN_AUTH}/authRemoteEntry.js`,
        users: `users@${DOMAIN_USERS}/usersRemoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
