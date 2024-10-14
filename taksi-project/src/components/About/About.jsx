import React, { useState } from 'react';
import './About.css'; 
import skoda_placeholder from '/src/assets/images/skoda_transparent.png';
import kari from '/src/assets/images/fakekaritransparent.png';
import hämeenkatu from '/src/assets/images/hämeenkatucopy.jpg';


const HeroSection = () => {

  const [isAnimating, setIsAnimating] = useState(false); // State to trigger animation

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation state after the animation duration
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Duration of animation in milliseconds
  };
  

  return (
    <div className="hero-container">
      <div className="hero-background">
        <img src={hämeenkatu} alt="Taxi cars on Hämeenkatu" />
      </div>
      <div className="hero-content">
        <h2>TAKSI KARI TORNIKOSKI 050-67020</h2>
        <hr className="hero-divider" /> 
        <h1>Perinteistä taksipalvelua</h1>
        <p>
          Taksi Kari Tornikoski takaa luotettavaa perinteistä palvelua edullisin hinnoin.
        </p>
        <div className="hero-buttons">
          <a href="#book" onClick={handleClick} className={`btn-primary ${isAnimating ? 'leave-screen' : ''}`}>Tilaa nyt</a>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
