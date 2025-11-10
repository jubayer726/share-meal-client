import React from 'react';
import Banner from '../Components/Banner';
import OurMission from '../Components/OurMission';
import Foods from './Foods';



const latestFoods = fetch('http://localhost:3000/foods')
.then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods latestFoods={latestFoods}></Foods>
            <OurMission></OurMission>
        </div>
    );
};

export default Home;