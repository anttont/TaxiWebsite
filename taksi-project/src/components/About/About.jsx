import React from 'react';
import './About.css'; 
import skoda_placeholder from '/src/assets/images/skoda_transparent.png';
import kari from '/src/assets/images/fakekaritransparent.png';
import hämeenkatu from '/src/assets/images/hämeenkatucopy.jpg';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <img src={hämeenkatu} alt="Taxi cars on Hämeenkatu" />
      </div>
      <div className="hero-content">
        <h2>TAKSI KARI TORNIKOSKI 040 911 911</h2>
        <h1>Perinteistä taksipalvelua</h1>
        <p>
          Taksi Kari Tornikoski takaa luotettavaa perinteistä palvelua edullisin hinnoin.
        </p>
        <div className="hero-buttons">
          <a href="#book" className="btn-primary">Tilaa nyt</a>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
