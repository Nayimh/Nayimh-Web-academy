import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../image/logo'
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="light"  expand="sm">
  <Container>
            <Navbar.Brand href="#home" className="logo"><img className=" logo" src={logo} alt="" /></Navbar.Brand>
            
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;