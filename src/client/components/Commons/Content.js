import React from 'react';
import Proptypes from 'prop-types';
import './commons.scss';

const Content = ({ title }) => (
  <div className="todo-display">
    <p className="display-title">{title}</p>
  </div>
);

Content.propTypes = {
  title: Proptypes.string.isRequired,
};
export default Content;
