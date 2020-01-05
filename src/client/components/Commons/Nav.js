import React from 'react';
import { Link } from 'react-router-dom';
import './commons.scss';
import Settings from '../../assets/settings.svg';
import Plus from '../../assets/plus.svg';
import Heart from '../../assets/heart.svg';
import Notification from '../../assets/notification.svg';
import Search from '../../assets/search.svg';
import Layers from '../../assets/layers.svg';

const Nav = () => (
  <nav className="app-nav">
    <div className="nav-content">
      <div className="logo">
        <Link to="/app">
          <Layers className="nav-svg" />
        </Link>
      </div>
      <div className="search-bar">
        <Search className="nav-svg search-icon" />
        <input type="text" className="search-input" placeholder="Quick Find" />
      </div>
      <div className="nav-actions">
        <div>
          <Plus className="nav-svg" />
        </div>
        <div>
          <Heart className="nav-svg" />
        </div>
        <div>
          <Notification className="nav-svg " />
        </div>
        <div>
          <Settings className="nav-svg" />
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
