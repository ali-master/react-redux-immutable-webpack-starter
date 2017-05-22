// @flow weak

import React, {PropTypes} from 'react';

const Jumbotron = (props) => (
  <div className="jumbotron">
    {props.children}
  </div>
);

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
