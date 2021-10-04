import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    } , [])

    return (
        <div className="secvicesContainer mt-5">
            <div className="textConteiner">
            <h1 className="my-3">Our Services: {services.length}</h1>
                <p>Take the next step toward your personal and professional goals with Web Academy.</p>
                <hr />
            </div>
            
            <div className="cardContainer">
                {
                    services.map(service => <div className="homeCard p-2">
                    <div><img src={service.image} alt="" /></div>
                    <h4>service Name: {service.serviceName}</h4> <br /> 
                    <h5>Instructor Name: {service.Instructor}</h5> <br />
                    <p>Price: ${service.Price}</p> <br />
                    <button className="bg-success btn w-50">Details</button>
            </div>)
                }
            </div>
        </div>
    );
};

export default Services;