import React from 'react';
import ReactDOM from 'react-dom';
import '../style/App';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
