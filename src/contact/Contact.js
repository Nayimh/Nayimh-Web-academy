import React from 'react';

import './contact.css'
const Contact = () => {
    return (
       
        <div className="contactContainer mt-5">
            <h3> Contact Us </h3>
            <hr />
            <form id="contact-form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-success my-2 w-100">Submit</button>
</form>
            </div>
           
    );
};

export default Contact;