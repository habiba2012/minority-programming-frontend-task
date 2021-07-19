import React, { useEffect, useState } from 'react';
import ProposalData from '../../../Data/proposal.json'
import { Card } from 'react-bootstrap'
import proposalIcon from '../../../assets/images/proposal-icon.png'
import progressBar from '../../../assets/images/proposalProgress.png'
import arrow from '../../../assets/images/arrow.png';

const MyProposal = () => {
    const [myProposal, setMyProposal] = useState([]);
    console.log(myProposal);
    useEffect(() => {
        setMyProposal(ProposalData)
    }, [])

    return (
        <div className="proposal-container p-5 text-center ml-auto">
            <div className="">

                {myProposal.map(proposal => {
                    return (
                        <div className="d-flex text-center justify-content-center">
                            <div className="mb-5 " style={{ width: "1200px" }}>

                                <Card>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="d-flex justify-content-start">
                                                    <img src={proposalIcon} alt="" />
                                                    <Card.Title style={{}}>{proposal.title}</Card.Title>
                                                </div>
                                                <div className="d-flex justify-content-start" style={{ color: "#282828", fontSize: "16px" }}>
                                                    <Card.Text><span className="font-weight-bold">Type:</span>{proposal.type}</Card.Text>
                                                    <Card.Text><span className="font-weight-bold ml-2">Category:</span> {proposal.category}</Card.Text>

                                                </div>
                                                <img src={progressBar} alt="" />
                                            </div>
                                            <div className="col-md-6 " >
                                                <div className="user-info d-flex justify-content-between ">
                                                    <div className="col-md-6 d-flex justify-content-end">
                                                        <p style={{ color: " #282828", fontSize: "20px" }}>58
                                                            <br /> <span style={{ fontWeight: "bold", color: "#000", fontSize: "14px" }}>Username</span></p>
                                                        <p style={{ color: " #282828", fontSize: "20px" }}>74
                                                            <br /> <span style={{ fontWeight: "bold", color: "#000", fontSize: "14px" }}>Views</span></p>
                                                        <p style={{ color: " #282828", fontSize: "20px" }}>20
                                                            <br /> <span style={{ fontWeight: "bold", color: "#000", fontSize: "14px", marginRight: "10px" }}>$Min Earned</span></p>
                                                        <div className="pt-3"
                                                            style={{ width: "180px", height: "40px", borderRadius: "6px", marginRight: "-200px" }}>
                                                            <button
                                                                style={{ color: "#151371", marginBottom: "10px", width: "180px", height: "40px", borderRadius: "6px" }}>View Proposal</button><br />
                                                            <button
                                                                style={{ backgroundColor: "#151371", color: "white", width: "180px", height: "40px", borderRadius: "6px" }}>Claim $ Minority</button>
                                                        </div>

                                                    </div>
                                                    <img src={arrow} alt="" style={{ width: "40px", marginLeft: "80px", marginTop: "20px" }} />
                                                </div>
                                                <div className="col-md-6 d-flex justify-content-start ml-2">
                                                    <p style={{ color: " #00000066", fontSize: "13px" }}>Created by
                                                        <br /> <span style={{ fontWeight: "bold", color: "#282828" }}>Username</span></p>
                                                    <p style={{ color: " #00000066", fontSize: "13px" }}>Created on
                                                        <br /> <span style={{ fontWeight: "bold", color: "#282828" }}>March 25</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    )
                })}

            </div>
        </div >
    );
};

export default MyProposal;