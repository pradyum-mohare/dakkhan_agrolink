import React from 'react';

export default function Header({ page, navigate }) {
  return (
    <header className="site-header">
      <div className="nav-container">
        <button className="brand" onClick={() => navigate('home')} aria-label="Dakkhan Agrolink home">
          <img src="/assets/logo.webp" alt="Dakkhan Agrolink logo" />
          <div>
            <strong>DAKKHAN AGROLINK</strong>
            <span>COMMODITY SOLUTIONS</span>
          </div>
        </button>

        <nav aria-label="Main navigation">
          <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button>
          <button className={page === 'products' ? 'active' : ''} onClick={() => navigate('products')}>Products</button>
          <button className={page === 'contact' ? 'active' : ''} onClick={() => navigate('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
