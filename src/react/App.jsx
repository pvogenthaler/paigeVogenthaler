import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/App';

import Menu from './Menu';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

class App extends React.Component {
    state = { hash: window.location.hash };

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({ hash: window.location.hash });
        });
    }

    render() {
        const { hash } = this.state;

        return (
            <React.Fragment>
                <Menu />
                <div className="main">
                    {
                        (() => {
                            switch(hash) {
                                case '#about': return <About />
                                case '#blog': return <Blog />
                                case '#contact': return <Contact />
                                default: return <Home />
                            }
                        })()
                    }
                </div>
            </React.Fragment>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
