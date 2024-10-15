import React, { useState } from 'react';
import "./Navbar.css";
import Modal from '../Modal/Modal.jsx'

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);  // State for button animation
  const [isModalActive, setIsModalActive] = useState(false);  // State for modal visibility

  const handleClick = () => {
    setIsAnimating(true);   // Start the button animation
    setIsModalActive(true);  // Open the modal
    setTimeout(() => {
      setIsAnimating(false);  // Reset button animation after it completes
    }, 1000); // Duration of animation
  };

  const toggleModal = () => {
    setIsAnimating(false);    // Reset button animation when closing
    setTimeout(() => {
      setIsModalActive(false);  // Delay modal closing to show fade-out
    }, 500); // Wait for the modal exit animation to complete
  };

  return (
    <div className="taksi__navbar-container">
      <nav className="taksi__navbar">
        <p>KARI TORNIKOSKI TAKSI</p>

        <ul className="taksi__navbar-list">
          <p><a href="#pricing">Hinnasto</a></p>
          <p><a href="#reviews">Arvostelut</a></p>
          <p><a href="#contact">Yhteystiedot</a></p>
        </ul>

        <button 
          onClick={handleClick} 
          className={`taksi__navbar-button ${isAnimating ? 'leave-screen' : ''}`}
        >
          tilaa
        </button>
      </nav>

      {/* Render the Modal component */}
      <Modal toggleModal={toggleModal} isModalActive={isModalActive} />
    </div>
  );
};

export default Navbar;

