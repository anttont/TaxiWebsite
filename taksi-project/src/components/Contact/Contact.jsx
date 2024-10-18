// Reviews.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">

      <div className="contact-box">
        <h3>Yhteystiedot</h3>
        <p>Kari Tornikoski</p>
        <p>Puhelin numero: 050-67020</p>
        <p>Sähköposti: taksi@firma.fi</p>
      </div>

      <div className="copyright">
        <p>© 2024 Kari Tornikoski Taksi</p>
        <a href="http://anttonitornikoski.com" >Sivusto: anttonitornikoski.com</a>
      </div>

      

    </div>
  );
};

export default Contact;
