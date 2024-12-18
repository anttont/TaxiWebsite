import React, { useState } from 'react';
import './About.css'; 
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
    <div className="hero-container" id="hero">
      <div className="hero-background">
        <img src={hämeenkatu} alt="Hämeenkatu" />
      </div>
      <div className="hero-content">
        <h2>- KARI TORNIKOSKI TAKSI -</h2>
        <hr className="hero-divider" /> 
        <h1>Perinteistä taksipalvelua</h1>
        <h1> 050 67 020</h1>
        <p>
          Kari Tornikoski taksi takaa luotettavaa perinteistä palvelua edullisin hinnoin. Palvelemme Pirkanmaan alueella. Kysy tarjous myös kauempaa. 
        </p>
        <hr className="hero-divider" /> 
       {/* <div className="hero-buttons">
          <a href="#book" onClick={handleClick} className={`btn-primary ${isAnimating ? 'leave-screen' : ''}`}>Tilaa nyt</a>

        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
