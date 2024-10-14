import React, { useState } from 'react';
import "./Navbar.css"
const Navbar = () => {
    const [isAnimating, setIsAnimating] = useState(false); // State to trigger animation

    const handleClick = () => {
        setIsAnimating(true);
        // Reset animation state after the animation duration
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000); // Duration of animation in milliseconds
      };

    return (
        <div className="taksi__navbar-container">
            <nav className="taksi__navbar">
                <p>KARI TORNIKOSKI TAKSI</p>

                <ul className="taksi__navbar-list">
                <p> <a href="#pricing">Hinnasto</a></p>
                <p> <a href="#reviews">Arvostelut</a></p>
                <p> <a href="#contact">Yhteystiedot</a></p>
                </ul>

                <button  onClick={handleClick} className={`taksi__navbar-button ${isAnimating ? 'leave-screen' : ''}`}>tilaa</button> 
                </nav>
        </div>
     )
  }
  
  export default Navbar;