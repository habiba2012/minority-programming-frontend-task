import React from 'react';
import BrandLogo from "../../assets/images/logo.png"
import groupIcon from "../../assets/images/icon-group.png"


import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" style={{ height: "184px" }}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={BrandLogo} alt="" style={{ width: "70px", marginLeft: "-230px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ fontWeight: "bold", fontSize: "20px" }}>
                    <Nav className="ml-auto ">
                        <img src={groupIcon} alt="" />
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >



    );
};

export default NavBar;