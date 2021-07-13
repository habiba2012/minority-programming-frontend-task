import React from 'react';
import SideBar from '../components/SideBar/SideBar'
import ProposalPageBanner from '../components/UserPageContent/ProposalPage/ProposalPageBanner'
import FeaturedProposals from '../components/UserPageContent/ProposalPage/ProposalCard'

const UserPage = () => {
    return (
        <div>

            <ProposalPageBanner />
            <FeaturedProposals />
            <SideBar />
        </div>
    );
};

export default UserPage;