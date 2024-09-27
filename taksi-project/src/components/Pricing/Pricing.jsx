import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Hinnasto</h2>
      <div className="pricing-item">
        <h3>Perusmaksut</h3>
        <p>Arkisin kello 07:00-18.00 </p>
        <p>Per mile: $1.50</p>
        <p>Minimum fare: $5.00</p>
      </div>
      <div className="pricing-item">
        <h3>Matkataksa</h3>
        <p>Base fare: $4.00</p>
        <p>Per mile: $2.00</p>
        <p>Minimum fare: $7.00</p>
      </div>
      <div className="pricing-item">
        <h3>Muut</h3>
        <p>Base fare: $5.00</p>
        <p>Per mile: $2.50</p>
        <p>Minimum fare: $10.00</p>
      </div>
      <p className="note">Note: Prices may vary based on demand and traffic conditions.</p>
    </div>
  );
};

export default Pricing;
