/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppLayout from './components/layout';
import Progress from './components/progressBar';
import 'antd/dist/antd.css';

const HomeLazy = lazy(() => import('./pages/home'));
const UsersLazy = lazy(() => import('./pages/modules/UsersApp'));
const AuthLazy = lazy(() => import('./pages/modules/AuthApp'));
const history = createBrowserHistory();

/**
 * App container
 * @returns {Component}
 */
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/home');
    } else {
      history.push('/auth/signin');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <AppLayout isSignedIn={isSignedIn}>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/" exact component={HomeLazy} />
            <Route path="/auth" render={() => <AuthLazy onSignIn={() => setIsSignedIn(true)} />} />
            <Route path="/home" component={HomeLazy} />
            <Route path="/users" component={UsersLazy} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
};

export default App;
