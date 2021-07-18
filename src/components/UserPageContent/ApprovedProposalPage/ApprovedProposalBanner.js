import React from 'react';
import ProposalBannerImg from '../../../assets/proposalImg.svg';
// import './ProposalPage.css'

const ApprovedProposalBanner = () => {
    return (
        <div>
            <div className="tasks-banner" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", marginBottom: "500px" }}>
                <div className="row">
                    <div className="col-md-7 pt-5">
                        <h1 className="banner-text text-center pt-5 ml-5 pl-5"
                            style={{ color: "#151371", fontSize: "51px" }}>MY PROPOSALS</h1>
                        <h4 className="text-center pt-5"
                            style={{ color: "#282828", fontSize: "24px" }}>Create tasks from proposals approved by core team.</h4>
                    </div>
                    <div className="col-md-5">
                        <img src={ProposalBannerImg} alt="" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ApprovedProposalBanner;