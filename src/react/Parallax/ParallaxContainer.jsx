import React from 'react';
import ParallaxGroup from './ParallaxGroup';
import ParallaxLayer from './ParallaxLayer';
import ParallaxImg from './ParallaxImg';
import ExperienceList from '../Experience/ExperienceList';

/*
  layer position usage:
    0 and 1: every group
    -1: every other group
    -2: every third group
*/

const ParallaxContainer = () => (
  <div className="parallax-container">
    { /* group 1 */ }
    <ParallaxGroup name="1">
      <ParallaxLayer { ...{ layerPosition: 0 } } />
      <ParallaxLayer { ...{ layerPosition: -1, name: 'img' } }>
        <ParallaxImg src="/assets/willis-tower.jpg" />
      </ParallaxLayer>
      <ParallaxLayer { ...{ layerPosition: 1, name: 'name' } } >
        <span className="name">Paige Vogenthaler</span>
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 2 */ }
    <ParallaxGroup name="2">
      <ParallaxLayer { ...{ layerPosition: 1, name: 'about' } }>
        <div>
          SHIT ABOUT ME
        </div>
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 3 */ }
    <ParallaxGroup name="3">
      <ParallaxLayer { ...{ layerPosition: 0 } } />
      <ParallaxLayer { ...{ layerPosition: -1, name: 'img' } }>
        <ParallaxImg src="/assets/willis-tower.jpg" />
      </ParallaxLayer>
      <ParallaxLayer { ...{ layerPosition: 1, name: 'experience' } } >
        <ExperienceList />
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 4 */ }
    <ParallaxGroup name="4">
      <ParallaxLayer { ...{ layerPosition: 1, name: 'more' } }>
        <div>
          MORE SHIT HERE
        </div>
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 5 */ }
    <ParallaxGroup name="5">
      <ParallaxLayer { ...{ layerPosition: 0 } } />
      <ParallaxLayer { ...{ layerPosition: -1, name: 'img' } }>
        <ParallaxImg src="/assets/willis-tower.jpg" />
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 6 */ }
    <ParallaxGroup name="6">
      <ParallaxLayer { ...{ layerPosition: 1, name: 'more' } }>
        <div>
          CONCLUSION
        </div>
      </ParallaxLayer>
    </ParallaxGroup>
  </div>
);

export default ParallaxContainer;
