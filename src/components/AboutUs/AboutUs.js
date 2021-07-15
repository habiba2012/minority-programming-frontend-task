import React from 'react';
import VideoBanner from '../VideoBanner/VideoBanner'

const AboutUs = () => {
    return (
        <div className="container-fluid">
            <div className="row ml-5 pt-3">
                <div className="col-md-6 pt-5 mt-5">
                    <h3 style={{ color: "#151371", FontWeight: "bold", fontSize: "60px" }}>ABOUT US</h3>
                    <p className="mt-4 p-2" style={{ color: "white", fontSize: "24px" }}>We are international network of developers<br />
                        unifying together to build socially impactful <br />
                        projects and spread STEM education to  <br />
                        marginalized communities
                    </p>
                </div>
                <div className="col-md-6 pt-5 mt-5">
                    <VideoBanner />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;