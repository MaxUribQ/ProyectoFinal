
import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section company">
        <h2>VIDEOGAMES</h2>
        <p>¿Que hacemos por ti?</p>
      </div>
      <div className="footer-section explore">
        <h3>Explorar</h3>
        <ul>
          <li>General</li>
          <li>Explore</li>
          <li>Guias</li>
          <li>Mas</li>
        </ul>
      </div>
      <div className="footer-section visit">
        <h3>Visitanos</h3>
        <p>FIC UAS. Mexico</p>
        <p>34 Tesla, Ste 100</p>
        <p>CLN, SIN, MEX 92618</p>
      </div>
      <div className="footer-section contact">
        <h3>New Proyect</h3>
        <p>m.uribe23@info.uas.edu.mx</p>
        <p>949.333.3106</p>
      </div>
      <div className="footer-section follow">
        <h3>Follow</h3>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className="footer-section legal">
        <h3>Legal</h3>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="footer-section">
        <p>&copy; 2024 UAS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
