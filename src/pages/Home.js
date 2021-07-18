import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import SliderBanner from '../components/CarouselBanner/SliderBanner';
import Contact from '../components/Contact/Contact';
import Destination from '../components/GoogleMap/Destination';

const Home = () => {
    return (
        <div className="container-fluid">
            <SliderBanner />
            <AboutUs />
            <Contact />
            <Destination />
        </div>
    );
};

export default Home;