import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Home.css"


const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Home.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className=" my-5 homeContainer">
            <div className=" heading">
            <h3 className="my-2">Professional Courses.</h3>
<h1> Get job-ready for an in-demand career </h1>
            <p>Break into a new field like information technology. No prior experience necessary to get started.</p>
                <h1>Courses: {courses.length}</h1>
                <hr />
            </div>
            <div className="cardContainer mx-auto">
            {
                    courses.map(course => <div className="homeCard p-2">
                        <div><img src={course.image} alt="" /></div>
                        <h4>Course Name: {course.CourseName}</h4> <br /> 
                        <h5>Instructor Name: {course.Instructor}</h5> <br />
                        <p>Price: ${course.Price}</p> <br />
                        <button className="bg-success btn ">Details</button>
                </div>)
            }
           </div>
        </div>
    );
};

export default Home;