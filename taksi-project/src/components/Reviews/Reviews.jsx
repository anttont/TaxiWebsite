// Reviews.jsx
import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="reviews-container" id="reviews">
      <div className="review-box">
        
        <h3>Erittäin mukava kaveri! Siisti auto ja ajallaan.</h3>
        <div className="stars">★★★★★</div>
      </div>

      <div className="review-box">
        
        <h3>Todella mukava ja asiallinen kyyti. Osaa hommansa.</h3>
        <div className="stars">★★★★★</div>
      </div>

      <div className="review-box">
        
        <h3>YStävällinen ja avualias kuljettaja!</h3>
        <div className="stars">★★★★★</div>
      </div>

      <div className="review-box">
        
        <h3>Loistokyyti ja todella mukava kuski. </h3>
        <div className="stars">★★★★★</div>
      </div>

      <div className="review-box">
        
        <h3>Thank you very nice experience.</h3>
        <div className="stars">★★★★★</div>
      </div>

      <div className="review-box">
        
        <h3>Aivan mieletön vanhan ajan herrasmies taksikuski!</h3>
        <div className="stars">★★★★★</div>
      </div>

      <div className="review-box">
        
        <h3>Ammattimaista ja kohteliasta toimintaa.</h3>
        <div className="stars">★★★★★</div>
      </div>

      {/* Add more reviews as needed */}
    </div>
  );
};

export default Reviews;
