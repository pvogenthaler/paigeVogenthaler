import React from 'react';
import PropTypes from 'prop-types';
import { getClassNames } from './parallaxUtils';

const ParallaxGroup = ({ children, name = '' }) => (
  <div className={ getClassNames('parallax-group', name) }>
    { children }
  </div>
);

ParallaxGroup.propTypes = {
  name: PropTypes.string
};

export default ParallaxGroup;
