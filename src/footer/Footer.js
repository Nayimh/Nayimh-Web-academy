import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className=" linkContainer">
            <NavLink className="navA" to="/home" activeStyle={{ fontWeight: "bold", color: "green"}}> Home </NavLink>
              <NavLink className="navA" to="/services" activeStyle={{ fontWeight: "bold",color: "green" }}> Services</NavLink>
              <NavLink className="navA" to="/about"activeStyle={{fontWeight: "bold", color: "green"}}>About</NavLink>
              <NavLink className="navA" to="/contact" activeStyle={{fontWeight: "bold",color: "green" }}> Contact</NavLink>
            </div>
            <p>©Copyright by Web Academy</p>
        </div>
    );
};

export default Footer;