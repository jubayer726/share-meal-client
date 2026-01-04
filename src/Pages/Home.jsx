import React from 'react';
import Banner from '../Components/Banner';
import OurMission from '../Components/OurMission';
import Foods from './Foods';
import FAQ from '../Components/FAQ';




const latestFoods = fetch('https://share-meal-searver.vercel.app/foods')
.then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods latestFoods={latestFoods}></Foods>
            <OurMission></OurMission>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;