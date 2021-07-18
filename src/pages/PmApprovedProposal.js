import React from 'react';
import ApprovedProposalBanner from '../components/UserPageContent/ApprovedProposalPage/ApprovedProposalBanner'
import ApprovedProposalCard from '../components/UserPageContent//ApprovedProposalPage/ApprovedProposalCard'

const PmApprovedProposal = () => {
    return (
        <div className="container-fluid">
            <div style={{ paddingBottom: "80px" }}>
                <ApprovedProposalBanner />
            </div>
            <div style={{ padding: "350px" }}>
                <ApprovedProposalCard />
            </div>


        </div>
    );
};

export default PmApprovedProposal;