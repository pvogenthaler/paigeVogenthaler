import React from 'react';
import PropTypes from 'prop-types';
import { getClassNames } from './parallaxUtils';

const ParallaxLayer = ({ children, layerPosition, name = '' }) => (
  <div className={ getClassNames('parallax-layer', name, layerPosition.toString()) }>
    { children }
  </div>
);

ParallaxLayer.propTypes = {
  layerPosition: PropTypes.oneOf([0, 1, 2, 3]).isRequired,
  name: PropTypes.string
}

export default ParallaxLayer;
