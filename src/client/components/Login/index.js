import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useCookies } from 'react-cookie';
import './login.scss';

const LOGIN = gql`
  mutation GoogleAuth($accessToken: String!) {
    googleAuth(accessToken: $accessToken) {
      token
    }
  }
`;
const Login = () => {
  const [, setCookie] = useCookies();
  const [loginUser, { data, error: loginError }] = useMutation(LOGIN);
  let errorMessage = '';
  if (data && data.googleAuth) {
    setCookie('todoToken', data.googleAuth.token);
    window.location.replace('/app');
  }

  if (loginError) {
    errorMessage = loginError.message;
  }
  /**
   *
   * @param {Object} response
   * @returns {String}
   */
  const responseGoogle = (response) => {
    if (response) {
      loginUser({ variables: { accessToken: response.tokenId } });
    }
    return false;
  };

  const errorResponse = () => false;

  return (
    <div className="login-form">
      <span className="error">{errorMessage}</span>
      <GoogleLogin
        clientId="708231311520-m2bhnd9e38lvo7dhq4hipgno7sfpshqv.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={errorResponse}
        cookiePolicy={'single_host_origin'}
      />
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="button" className="login-button" value="login" />
      </form>
    </div>
  );
};

export default Login;
