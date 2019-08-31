import React from 'react';
import { useCookies } from 'react-cookie';
import Login from '../Login';
import './home.scss';

const App = () => {
  const [cookie] = useCookies();
  if (cookie.todoToken) {
    window.location.replace('/app');
    return false;
  }
  return (
    <div className="login-wrapper">
      <Login />
    </div>
  );
};

export default App;
