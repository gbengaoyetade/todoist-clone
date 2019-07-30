import React from 'react';

const Login = () => {
  const text = 'hello';
  return (
    <div>
      {text}
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
