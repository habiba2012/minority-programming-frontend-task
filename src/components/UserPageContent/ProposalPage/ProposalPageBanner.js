import React from 'react';
import ProposalBannerImg from '../../../assets/proposalImg.svg';
import './ProposalPage.css'



const ProposalPageBanner = () => {
    return (
        <div className="tasks-banner" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
            <div className="row">
                <div className="col-md-7 pt-5">
                    <h1 className="banner-text text-center pt-5 ml-5 pl-5"
                        style={{ color: "#151371", fontSize: "51px" }}>MY PROPOSALS</h1>
                    <h4 className="text-center pt-5"
                        style={{ color: "#282828", fontSize: "24px" }}>Proposals I have submitted to the community governance.</h4>
                </div>
                <div className="col-md-5">
                    <img src={ProposalBannerImg} alt="" className="img-fluid" />
                </div>
            </div>

        </div>
    );
};

export default ProposalPageBanner;