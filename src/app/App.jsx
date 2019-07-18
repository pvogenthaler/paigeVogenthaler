import React from 'react';
import ReactDOM from 'react-dom';
import '../style/App';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <nav className='menu'>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to='/about' activeClassName='active'>About</NavLink>
        <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
        <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
    </nav>
    <div className='main'>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/contact' component={Contact}/>
    </div>
</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
