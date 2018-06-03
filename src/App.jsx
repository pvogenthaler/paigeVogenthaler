import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxContainer from './ParallaxContainer';

const App = () => (
  <React.Fragment>
    <ParallaxContainer />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
