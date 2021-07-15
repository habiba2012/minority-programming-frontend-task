import React from "react";
import "./Sliderbanner.css";
import slide1 from "../../assets/sliderImg/img1.jpeg";
import slide2 from "../../assets/sliderImg/img2.jpg";
import slide3 from "../../assets/sliderImg/img3.jpeg";
import slide4 from "../../assets/sliderImg/img4.png";



const SliderBanner = () => {
    return (
        <div>
            <div className="slider-box" >
                <div className="slider1 img-fluid" style={{ marginTop: "5rem", fontSize: "80px" }}>
                    <img className="slide-img" src={slide1} alt="" />
                    <div className="text-box">
                        <h3 className="text-center " >JOIN US</h3>
                    </div>
                </div>
                <div className="slider2 img-fluid" style={{ marginTop: "5rem", fontSize: "80px" }}>
                    <img className="slide-img" src={slide2} alt="" />
                    <div className="text-box">
                        <h3 className="text-center ">JOIN US</h3>
                    </div>
                </div>
                <div className="slider3 img-fluid" style={{ marginTop: "5rem", fontSize: "80px" }}>
                    <img className="slide-img" src={slide3} alt="" />
                    <div className="text-box">
                        <h3 className="text-center ">JOIN US</h3>
                        <span></span>
                    </div>
                </div>
                <div className="slider4 img-fluid" style={{ marginTop: "5rem", fontSize: "80px" }}>
                    <img className="slide-img" src={slide4} alt="" />
                    <div className="text-box">
                        <h3 className="text-center ">JOIN US</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;