import React from 'react';

import Footer from './Footer';
import Diagonals from './Diagonals';
import Nav from './Nav';
import SEO from './SEO';
import '../style/App.scss';

const Layout = ({ children }) => (
    <div id="root">
        <SEO />
        <Nav />
        <div className="main">
            { children }
        </div>
        <Footer />
        <Diagonals />
    </div>
);

export default Layout;
