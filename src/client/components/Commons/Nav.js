import React from 'react';
import { Link } from 'react-router-dom';
import './commons.scss';

const Nav = () => (
    <nav className="app-nav">
      <div className="nav-content">
        <div className="logo">
          <Link to="/app">
            <i className="fas fa-layer-group"></i>
          </Link>
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" className="search-input" />
        </div>
        <div className="nav-actions">
          <div>
            <i className="fas fa-plus"></i>
          </div>
          <div>
            <i className="fas fa-star"></i>
          </div>
          <div>
            <i className="fas fa-bell"></i>
          </div>
          <div>
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </div>
    </nav>
);

export default Nav;
