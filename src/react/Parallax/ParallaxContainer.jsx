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
        <ParallaxImg src="/assets/lake-michigan.jpg" />
      </ParallaxLayer>
      <ParallaxLayer { ...{ layerPosition: 2, name: 'name' } } >
        <span className="name">Paige Vogenthaler</span>
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 2 */ }
    <ParallaxGroup name="2">
      <ParallaxLayer { ...{ layerPosition: 0 } } />
      <ParallaxLayer { ...{ layerPosition: 1, name: 'experience' } }>
        <ExperienceList />
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 3 */ }
    <ParallaxGroup name="3">
      <ParallaxLayer { ...{ layerPosition: 0 } } />
      <ParallaxLayer { ...{ layerPosition: -1, name: 'img' } }>
        <ParallaxImg src="/assets/denver.jpg" />
      </ParallaxLayer>
      <ParallaxLayer { ...{ layerPosition: 1, name: 'experience' } } >
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 4 */ }
    <ParallaxGroup name="4">
      <ParallaxLayer { ...{ layerPosition: 0 } } />
      <ParallaxLayer { ...{ layerPosition: 1, name: 'more' } }>
        <div>
          MORE SHIT HERE
        </div>
      </ParallaxLayer>
    </ParallaxGroup>

    { /* group 5 */ }
    <ParallaxGroup name="5">
      <ParallaxLayer { ...{ layerPosition: 0, name: 'social' } } >
        <a href="https://www.linkedin.com/in/pvogenthaler" className="social-icon fa fa-linkedin-square"></a>
        <a href="https://www.instagram.com/paigevogie" className="social-icon fa fa-instagram"></a>
        <a href="https://www.github.com/pvogenthaler" className="social-icon fa fa-github"></a>
        <a href="https://jsfiddle.net/user/pvogenthaler/" className="social-icon fa fa-jsfiddle"></a>
      </ParallaxLayer>
      <ParallaxLayer { ...{ layerPosition: -1, name: 'img' } }>
        <ParallaxImg src="/assets/howie.jpg" />
      </ParallaxLayer>
    </ParallaxGroup>
  </div>
);

export default ParallaxContainer;
