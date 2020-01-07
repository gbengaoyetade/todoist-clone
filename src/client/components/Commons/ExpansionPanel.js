import React, { Fragment } from 'react';
import { string } from 'prop-types';
import Arrow from '../../assets/arrow.svg';
import Plus from '../../assets/plus.svg';

const ExpansionPanel = (props) => {
  const { title } = props;
  const handleArrowClick = (event) => {
    event.stopPropagation();
    console.log('Arrow Click');
  };
  const handlePanelClick = () => {
    console.log('Panel Click');
  };
  return (
    <Fragment>
      <div className="expansion-panel" onClick={handlePanelClick}>
        <button>
          <Arrow className="arrow-icon" /> <strong>{title}</strong>
        </button>
        <button>
          <Plus className="plus-icon" onClick={handleArrowClick} />
        </button>
      </div>
      <div className="panel-children"></div>
    </Fragment>
  );
};

ExpansionPanel.propTypes = {
  title: string.isRequired,
};
export default ExpansionPanel;
