import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/App';
import { Router, Route, Link, browserHistory } from 'react-router-dom';

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

const createHistory = require('history').createBrowserHistory;

const App = () => (
  <Router history={createHistory()}>
    <nav className="menu">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
    <div className="main">
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/contact' component={Contact}/>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
