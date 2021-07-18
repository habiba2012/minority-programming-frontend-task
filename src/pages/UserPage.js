import React from 'react';

import ProposalPageBanner from '../components/UserPageContent/ProposalPage/ProposalPageBanner'
import FeaturedProposals from '../components/UserPageContent/ProposalPage/ProposalData'
import VotedProposal from '../components/UserPageContent/ProposalPage/VotedProposal'

const UserPage = () => {
    return (
        <div className="container-fluid">

            <ProposalPageBanner />
            <FeaturedProposals />
            <VotedProposal />

        </div>
    );
};

export default UserPage;