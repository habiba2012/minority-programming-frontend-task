import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ProposalBannerImg from '../../../assets/proposalImg.svg';
import './ProposalPage.css'



const ProposalPageBanner = () => {
    return (
        <div className="user-page-banner">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={7} >
                        <Fade right duration={2000} distance="40px">
                            <h1 className="text-center" style={{ color: "#151371" }}>MY PROPOSALS</h1>
                            <h4 style={{ marginLeft: "100px" }}><span style={{ color: "black" }}>Proposals I have submitted to the community governance.</span> </h4>

                        </Fade>
                    </Col>
                    <Col md={5} className="p-md-5 mt-md-0 mt-4">
                        <Fade left duration={2000} distance="40px">
                            <Image style={{ height: "300px" }} src={ProposalBannerImg} fluid />
                        </Fade>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default ProposalPageBanner;