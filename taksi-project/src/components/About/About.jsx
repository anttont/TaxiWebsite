import React from 'react';
import './About.css'; 
import skoda_placeholder from '/src/assets/images/skoda_transparent.png';
import kari from '/src/assets/images/fakekaritransparent.png';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-headtext'>
          <h1>tervetuloa parhaan taksin kyytiin!</h1>
          
        </div>
      <div className='about-image-container'>
      <div className="about-image animation_right">
        <img src={skoda_placeholder} alt="skoda" />
      </div>
      <div className="about-image animation_left">
        <img src={kari} alt="kari" />
      </div>
      
    </div>

    <div className="about-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      
    </div>
    
  );
};

export default About;
