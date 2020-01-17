import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import { string, node } from 'prop-types';
import Arrow from '../../assets/arrow.svg';
import Plus from '../../assets/plus.svg';

const ExpansionPanel = (props) => {
  const { title, children } = props;
  const [showChildren, setShowChildren] = useState(false);

  const handleArrowClick = (event) => {
    event.stopPropagation();
  };

  const handlePanelClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <Fragment>
      <div className="expansion-panel" onClick={handlePanelClick}>
        <button>
          <Arrow className= {classnames('arrow-icon', { 'rotate-icon': showChildren })} /> <strong>{title}</strong>
        </button>
        <button>
          <Plus className="plus-icon" onClick={handleArrowClick} />
        </button>
      </div>
      <div className={ classnames('panel-children', { 'panel-expanded': showChildren }) }>
        {children}
      </div>
    </Fragment>
  );
};

ExpansionPanel.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};
export default ExpansionPanel;
