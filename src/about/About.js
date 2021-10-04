import React from 'react';
import './About.css'
import Image from '../../src/image/logo'
const About = () => {
    return (
        <div className="aboutContainer mt-5  d-flex text-start">
             <img className="w-25 h-25 mt-5 pt-3" src={Image} alt="" />
            <article className="mt-5 p-2">
           
            <h1 className="mt-5"> 
            We believe
Learning is the source of human progress.
</h1>
It has the power to transform our world
from illness to health,
from poverty to prosperity,
from conflict to peace.

It has the power to transform our lives
for ourselves,
for our families,
for our communities.

No matter who we are or where we are,
learning empowers us to change and grow
and redefine what’s possible.
That’s why access to the best learning is a right, not a privilege.

And that’s why Coursera is here.
We partner with the best institutions
to bring the best learning
to every corner of the world.

So that anyone, anywhere has the power to
transform their life through learning.
               
            </article>
            
      
        </div>
    );
};

export default About;