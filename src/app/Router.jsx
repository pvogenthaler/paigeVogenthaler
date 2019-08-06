import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const Router = ({ isBlog = false }) => (
    <Fragment>
        <nav className='menu'>
            <NavLink to='/' exact activeClassName={!isBlog ? 'active' : ''}>Home</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
            <a href="/blog/index.html" className={isBlog ? 'active' : ''}>Blog</a>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </nav>
        <div className='main'>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </div>
    </Fragment>
);

export default Router;
