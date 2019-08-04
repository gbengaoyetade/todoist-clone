import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './login.scss';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const errorResponse = (error) => {
    console.log({ error });
  };

  return (
    <div className="login-form">
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
