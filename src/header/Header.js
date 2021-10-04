import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import logo from '../image/logo'
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="light"  expand="sm" >
  <Container>
            <Navbar.Brand href="#home" className="logo"><img className=" logo" src={logo} alt="" /></Navbar.Brand>
            
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" >
              <NavLink className="navA" to="/home" activeStyle={{ fontWeight: "bold", color: "green"}}> Home </NavLink>
              <NavLink className="navA" to="/services" activeStyle={{ fontWeight: "bold",color: "green" }}> Services</NavLink>
              <NavLink className="navA" to="/about"activeStyle={{fontWeight: "bold", color: "green"}}>About</NavLink>
              <NavLink className="navA" to="/contact" activeStyle={{fontWeight: "bold",color: "green" }}> Contact</NavLink>
        {/* <Nav.Link to="/home" >Home</Nav.Link>
        <Nav.Link to="/services">Services</Nav.Link>
        <Nav.Link to="/about">About</Nav.Link>
        <Nav.Link to="/contact">Contact</Nav.Link>   */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;