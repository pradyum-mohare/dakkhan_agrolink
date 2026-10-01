import React from 'react';

export default function Home({ navigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">TRUSTED COMMODITY SOLUTIONS</p>
          <h1>Quality commodities.<br /><span>Reliable supply.</span></h1>
          <p className="hero-text">
            Dakkhan Agrolink connects customers with quality agricultural and commodity products,
            with a simple and dependable ordering experience.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate('products')}>View Products</button>
            <button className="secondary-btn" onClick={() => navigate('contact')}>Contact Us</button>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="leaf-ring">🌾</div>
          <p>DAKKHAN<br />AGROLINK</p>
        </div>
      </section>

      <section className="intro section">
        <p className="eyebrow">DAKKHAN AGROLINK</p>
        <h2>Built around quality and dependable supply</h2>
        <p className="section-text">
          Explore our available commodity products and contact us directly for enquiries and orders.
        </p>
        <div className="feature-grid">
          <article><span>01</span><h3>Quality</h3><p>Products presented with clear grades and specifications.</p></article>
          <article><span>02</span><h3>Simple ordering</h3><p>Browse products and place enquiries without a complicated checkout.</p></article>
          <article><span>03</span><h3>Direct contact</h3><p>Reach Dakkhan Agrolink directly for availability and order details.</p></article>
        </div>
      </section>
    </>
  );
}