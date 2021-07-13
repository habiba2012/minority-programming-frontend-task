import React from 'react';
import { Card } from 'react-bootstrap'
import proposalIcon from '../../../assets/images/proposal-icon.png'
import progressBar from '../../../assets/images/proposalProgress.png'

const FeaturedProposals = (props) => {
    const { title, type, category } = props.proposal;
    return (
        <div className="d-flex justify-content-center">
            <div className="proposal-container mx-5">s

                <Card>
                    <Card.Body>
                        <img src={proposalIcon} alt="" />
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{type}</Card.Text>
                        <Card.Text>{category}</Card.Text>
                        <img src={progressBar} alt="" />
                    </Card.Body>

                </Card>
            </div>
            <div className="proposal-bottom-container ml-auto">
                <h3 style={{ color: "white", fontSize: "34px" }}>YOU VOTED FOR THE FOLLOWING PROPOSALS.</h3>
            </div>
        </div>

    );
};

export default FeaturedProposals;
