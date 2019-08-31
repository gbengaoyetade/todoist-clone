import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Proptypes from 'prop-types';

const RequiresAuth = ({ component: Component, ...rest }) => {
  const [cookie] = useCookies();
  const render = (props) => {
    if (!cookie.todoToken) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

RequiresAuth.propTypes = {
  component: Proptypes.func,
};
export default RequiresAuth;
