import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxImg from './ParallaxImg';
import ExperienceList from './ExperienceList';

const App = () => (
  <div>
    <ParallaxImg />
    <ExperienceList />
    <div class="next"></div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
