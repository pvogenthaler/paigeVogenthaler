import React from 'react';
import PropTypes from 'prop-types';

const ParallaxImg = ({ src }) => (
  <img className="parallax-img" { ...{ src } }/>
);

ParallaxImg.propTypes = {
  src: PropTypes.string.isRequired
};

export default ParallaxImg;
