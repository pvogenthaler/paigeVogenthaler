import React from 'react';
import ParallaxLayer from './ParallaxLayer';
import ExperienceList from './ExperienceList';

const ParallaxContainer = () => (
  <div className="parallax-container">

    <div className="parallax-group parallax-group-img">
      <ParallaxLayer { ...{ layerType: 'back', layerClass: 'parallax-img' } } />
      <ParallaxLayer { ...{ layerType: 'base', layerClass: 'name' } } >
        <span>Paige Vogenthaler</span>
        <span>Software Engineer</span>
      </ParallaxLayer>
    </div>

    <div className="parallax-group">
      <ParallaxLayer { ...{ layerType: 'base' } } >
          <ExperienceList />
      </ParallaxLayer>
    </div>

  </div>
);

export default ParallaxContainer;
