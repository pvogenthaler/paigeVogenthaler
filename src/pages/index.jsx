import React from 'react';
import Layout from '../components/Layout';

const Ring = () => <div className='ring'></div>;

const getRings = () => {
    const ringCount = 12;
    const Rings = [];

    for (let i = 0; i < ringCount; i++) {
        Rings.push(<Ring key={i}/>);
    }

    return Rings;
}

const Home = () => (
    <Layout>
        <div className="home">
            <h4>
                The portfolio and blog <br/> of Paige Vogenthaler.
            </h4>
            <div className='rings'>
                {getRings()}
            </div>
        </div>
    </Layout>
);

export default Home;
