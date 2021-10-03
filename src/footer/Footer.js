import React from 'react';

import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className=" linkContainer">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="contact">Contact</a>
            </div>
            <p>©Copyright by Web Academy</p>
        </div>
    );
};

export default Footer;