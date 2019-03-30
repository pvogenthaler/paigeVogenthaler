import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxContainer from './Parallax/ParallaxContainer';
import '../scss/index';

const App = () => (
  <React.Fragment>
    <ParallaxContainer />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
