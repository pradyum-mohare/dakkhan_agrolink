import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">DAKKHAN AGROLINK</div>
        <div className="footer-tagline">COMMODITY SOLUTIONS</div>
      </div>
      <div className="footer-links">
        <button onClick={() => navigate('home')}>Home</button>
        <button onClick={() => navigate('products')}>Products</button>
        <button onClick={() => navigate('contact')}>Contact</button>
      </div>
      <p>© {new Date().getFullYear()} Dakkhan Agrolink. All rights reserved.</p>
    </footer>
  );
}