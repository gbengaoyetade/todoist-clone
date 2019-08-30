import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequiresAuth = ({ component: Component, ...rest }) => {
  const render = (props) => {
    if (!document.cookie.todoist_clone) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

export default RequiresAuth;
