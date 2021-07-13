import React, { useEffect, useState } from 'react';
import ProposalData from '../../../Data/proposal.json'
import FeaturedProposals from './ProposalCard';

const MyProposal = () => {
    const [myProposal, setMyProposal] = useState([]);
    console.log(myProposal);
    useEffect(() => {
        setMyProposal(ProposalData)
    }, [])

    return (
        <div className="proposal-container">
            {myProposal.map((proposal) =>
                <FeaturedProposals proposal={proposal} />)}

        </div>
    );
};

export default MyProposal;