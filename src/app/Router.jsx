import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

const Router = ({ children }) => {
    const onRender = component => {
        if (typeof window.ga === 'function') {
            window.ga('set', 'page', window.location.pathname + window.location.search);
            window.ga('send', 'pageview');
        }

        return component;
    };

    return (
        <Fragment>
            <div className='router'>
                <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                <NavLink to='/about' activeClassName='active'>About</NavLink>
                <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
                <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
            </div>
            <div className='main'>
                <Route path='/' exact render={() => onRender(<Home />)} />
                <Route path='/about' render={() => onRender(<About />)} />
                <Route path='/blog' exact render={() => onRender(<Blog />)} />
                <Route path='/contact' render={() => onRender(<Contact />)} />
                { !!children ? children : null }
            </div>
        </Fragment>
    );
};

export default Router;
