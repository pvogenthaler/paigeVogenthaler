import React from 'react';
import PropTypes from 'prop-types';

const ParallaxLayer = ({ children, layerType, layerClass }) => (
    <div className={ `parallax-layer parallax-layer-${layerType} ${layerClass || ''}` }>
      { children }
    </div>
);

ParallaxLayer.propTypes = {
  layerType: PropTypes.oneOf(['fore', 'base', 'back', 'deep']).isRequired,
  layerClass: PropTypes.string
}

export default ParallaxLayer;
