
import React from 'react';
import './About.css'; // Ensure this file exists for styling
import skoda_placeholder from '/src/assets/images/skoda_transparent.png'

const About = () => {
  return (
    <div className="image-container">
      <img 
        src={skoda_placeholder} // Replace with your actual image path
        alt="Descriptive Alt Text"
        className="image" // Only apply the base image class
      />
      <div className="overlay">
        <h2 className="overlay-text">Your Overlay Text Here</h2>
      </div>
    </div>
  );
};

export default About;
