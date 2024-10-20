import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className='container' id="pricing">
      <div className="pricing-container">
      <h2>Hinnasto</h2>
      <div className="pricing-item">
        <h3>Perusmaksut</h3>
        <p>Perusmaksu arkisin kello 07:00-18.00: 5,90 €</p>
        <p>Perusmaksu muina aikoina:  9,50 €</p>
        <p>Minimimaksu on: 9,90 €</p>
        
      </div>
      <div className="pricing-item">
        <h3>Taksa</h3>
        <p>Matkataksa: 1,19 €/km</p>
        <p>Aikaveloitus: 1,09 €/min</p>
       
      </div>
      <div className="pricing-item">
        <h3>Muut</h3>
        <p>Ennakkotilausmaksu: 5,00 €</p>
      
      </div>

    
      
    </div>
    <div className="example-container">
    <h2>Esimerkki matkoja</h2>
    <div className="example-item">
        <p>Tampere - Kangasala: 5€</p>
    </div>
    <div className="example-item">
        <p>Tampere - Hämeenkyrö: 250€</p>
    </div>
    <div className="example-item">
    <   p>Tampere - Seinäjoki: 150€</p>
    </div>
    <div className="example-item">
        <p>Tampere - Helsinki: 250€</p>
    </div>
    <div className="example-item">
        <p>Tampere - Jyväskylä: 250€</p>
    </div>
    <div className="example-item">
    <   p>Tampere - Sodankylä: 600€</p>
    </div>

    
    <p className="note">Otathan huomioon, että lopullinen hinta voi muuttua tai jtn</p>
  </div>
    </div>
    
  );
};

export default Pricing;
