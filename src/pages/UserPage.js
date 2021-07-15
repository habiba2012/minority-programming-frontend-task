import React from 'react';

import ProposalPageBanner from '../components/UserPageContent/ProposalPage/ProposalPageBanner'
import FeaturedProposals from '../components/UserPageContent/ProposalPage/ProposalCard'

const UserPage = () => {
    return (
        <div>

            <ProposalPageBanner />
            <FeaturedProposals />

        </div>
    );
};

export default UserPage;