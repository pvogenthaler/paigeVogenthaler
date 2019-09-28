import React from 'react';
import Layout from '../components/Layout';

const Ring = () => <div className='ring'></div>;

const getRings = () => {
    const ringCount = 10;
    const Rings = [];

    for (let i = 0; i < ringCount; i++) {
        Rings.push(<Ring key={i}/>);
    }

    return Rings;
}

const Home = () => (
    <Layout>
        <div className="home">
            <h1>Paige Vogenthaler</h1>
            <div className='rings'>
                {getRings()}
            </div>
        </div>
    </Layout>
);

export default Home;
