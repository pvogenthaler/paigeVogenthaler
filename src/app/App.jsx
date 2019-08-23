import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../style/App';
import Router from './Router';
import Footer from './Footer';
import Diagonals from './Diagonals';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <Fragment>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
        <Footer />
        <Diagonals />
    </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
