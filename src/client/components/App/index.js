import React from 'react';
import Nav from '../Commons/Nav';
import SideNav from '../Commons/SideNav';
import Content from '../Commons/Content';
import './app.scss';

const App = () => (
  <div className="wrapper">
    <Nav />
    <div className="app-content">
      <SideNav />
      <Content title="something" />
    </div>
  </div>
);

export default App;
