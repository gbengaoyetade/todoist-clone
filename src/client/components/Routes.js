import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import App from './App';
import RequiresAuth from './RequiresAuth';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <RequiresAuth exact path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
