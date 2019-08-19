import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

const Router = ({ children }) => (
    <Fragment>
        <div className='router'>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
            <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
            <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </div>
        <div className='main'>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/contact' component={Contact} />
            { !!children ? children : null }
        </div>
    </Fragment>
);

export default Router;
