import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../style/App';
import Router from './Router';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <Fragment>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
        <Footer />
    </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
