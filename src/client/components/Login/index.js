import React from "react";
import "./login.scss";
const Login = () => {
  const text = "hello";
  return (
    <div>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
