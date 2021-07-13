import React from 'react';
import BrandLogo from "../../assets/images/logo.png"
import { FaFacebook, FaLinkedin, FaInstagram, FaPlay, FaGithub, FaTwitter } from "react-icons/fa"


import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar sticky="top" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span style={{ fontSize: "35px", fontWeight: "bold", color: "#2A8477" }}>

                        <img src={BrandLogo} alt="" width="70px" />
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="d-flex  my-5  ">
                    <a href={`https://twitter.com/minorityprogram/`} target="_blank" rel="noreferrer"> <span className="social-icon justify-content-center align-items-center"><FaTwitter /></span> </a>
                    <a href={`https://www.facebook.com/MinorityProgrammers`} target="_blank" rel="noreferrer"> <span className="social-icon justify-content-center align-items-center"><FaFacebook /></span> </a>
                    <a href={`https://www.linkedin.com/company/minority-programmers/`} target="_blank" rel="noreferrer"> <span className="social-icon justify-content-center align-items-center"><FaLinkedin /></span> </a>
                    <a href={`https://www.instagram.com/minorityprogrammers/`} target="_blank" rel="noreferrer"> <span className="social-icon justify-content-center align-items-center"><FaInstagram /></span> </a>


                </div>
                <Navbar.Collapse id="basic-navbar-nav" style={{ fontWeight: "bold", fontSize: "20px" }}>
                    <Nav className="ml-auto ">

                        <Nav.Link className=" item" as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link className=" item" as={Link} to="/PmViewTask">Manager</Nav.Link>
                        <Nav.Link className=" item" as={Link} to="#">UserPageBanner</Nav.Link>

                    </Nav>



                </Navbar.Collapse>
            </Container>

        </Navbar >



    );
};

export default NavBar;