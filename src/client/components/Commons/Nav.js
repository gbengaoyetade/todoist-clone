import React from 'react';
import './commons.scss';

const Nav = () => (
  <nav className="app-nav">
    <div className="nav-content">
      <div className="inner-addon left-addon">
        <i className="fas fa-search"></i>
        <input type="text" className="form-control" />
      </div>
    </div>
  </nav>
);

export default Nav;
