import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import SliderBanner from '../components/CarouselBanner/SliderBanner';
import Destination from '../components/GoogleMap/Destination';

const Home = () => {
    return (
        <div className="container-fluid">
            <SliderBanner />
            <AboutUs />
            <Destination />
        </div>
    );
};

export default Home;