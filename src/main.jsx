import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes/app.routes';
import NavBar from './components/navbar.component';

const Main = () => (
  <Router>
    <NavBar />
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
