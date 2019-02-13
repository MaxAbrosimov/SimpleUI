import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './redux/store';
import App from './App';
import { HomeView, Login, Signup, Page404, Demo, Statistic } from './modules';
import * as ROUTES from 'src/constants/ROUTES';

export default () => (
  <Router history={history}>
    <Route path={ROUTES.HOME} component={App}>
      <IndexRoute component={HomeView} />
      <Route path={ROUTES.DEMO} component={Demo} />
      <Route path={ROUTES.STATISTIC} component={Statistic} />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGNUP} component={Signup} />
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);
