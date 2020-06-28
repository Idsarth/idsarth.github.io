import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes/app.routes';
import NavBar from './components/navbar.component';
import SideBar from './components/sidebar.component';

const Main = () => (
  <Router>
    <NavBar />
    {/* <SideBar /> */}
    <Switch>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} exact={route.exact}>
          <route.page />
        </Route>
      ))}
    </Switch>
  </Router>
);

export default Main;
