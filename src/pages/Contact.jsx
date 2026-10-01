import React from 'react';

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p className="section-text">For product availability, enquiries and orders, contact Dakkhan Agrolink.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">⌖</div>
          <div>
            <h2>Visit Us</h2>
            <p>Snehankit Apartment Sr no 20/2/1<br />
            Ground floor flat no 1, Building no 262,<br />
            Kashinath Patil nagar, Balajinagar,<br />
            Dhankawadi, Pune 411043</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">☎</div>
          <div>
            <h2>Call Us</h2>
            <a href="tel:+917020990870">+91 7020990870</a>
            <p className="muted">For enquiries and orders</p>
          </div>
        </div>
      </div>
    </section>
  );
}