import React from 'react';
import { Link } from 'react-router-dom';
import Today from '../../assets/today.svg';
import Week from '../../assets/week.svg';
import Inbox from '../../assets/inbox.svg';

const SideNav = () => (
  <div className="side-nav">
    <ul>
      <li>
        <Link to="inbox">
          <Inbox className="side-nav-svg" style={{ fill: '#5197ff' }} />
          Inbox
        </Link>
      </li>
      <li>
        <Link to="/today">
          <Today className="side-nav-svg" style={{ fill: '#26ad49' }} />
          Today
        </Link>
      </li>
      <li>
        <Link to="/week">
          <Week className="side-nav-svg" style={{ fill: '#8c61cd' }} />
          Next 7 days
        </Link>
      </li>
    </ul>
  </div>
);

export default SideNav;
