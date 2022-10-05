/* eslint-disable import/no-extraneous-dependencies */
import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppLayout from './components/layout';
import Progress from './components/progressBar';
import 'antd/dist/antd.css';

const HomeLazy = lazy(() => import('./pages/home'));
const UsersLazy = lazy(() => import('./pages/modules/UsersApp'));
const history = createBrowserHistory();

/**
 * App container
 * @returns {Component}
 */
const App = () => (
  <Router history={history}>
    <AppLayout>
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/" exact component={HomeLazy} />
          <Route path="/home" component={HomeLazy} />
          <Route path="/users" component={UsersLazy} />
        </Switch>
      </Suspense>
    </AppLayout>
  </Router>
);

export default App;
