import React from 'react';

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
    <div className="home">
        <h1>Paige Vogenthaler</h1>
        <div className='rings'>
            {getRings()}
        </div>
    </div>
);

export default Home;
