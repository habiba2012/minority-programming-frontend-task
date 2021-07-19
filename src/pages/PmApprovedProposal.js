import React from 'react';
import ApprovedProposalBanner from '../components/UserPageContent/ApprovedProposalPage/ApprovedProposalBanner'
import ApprovedProposalCard from '../components/UserPageContent//ApprovedProposalPage/ApprovedProposalCard'

const PmApprovedProposal = () => {
    return (
        <div className="container-fluid col-md-12 col-xs-12">
            <div style={{ paddingBottom: "80px" }}>
                <ApprovedProposalBanner />
            </div>
            <div style={{ padding: "350px" }} className="col-md-12 col-xs-12">
                <ApprovedProposalCard />
            </div>


        </div>
    );
};

export default PmApprovedProposal;