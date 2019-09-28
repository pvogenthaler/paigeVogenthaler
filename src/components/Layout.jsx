import React from 'react';

import Footer from './Footer';
import Diagonals from './Diagonals';
import Nav from './Nav';
import '../style/App.scss';

const Layout = ({ children }) => (
    <div id="root">
        <Nav />
        <div className="main">
            { children }
        </div>
        <Footer />
        <Diagonals />
    </div>
);

export default Layout;
