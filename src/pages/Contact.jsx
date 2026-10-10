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
            <p>Ovi Apartment, flat no 202,<br />
            SR.NO: 55/3/A, Vadgaon Budruk,<br />
            near Paunjai Mata Mandir, <br />
             Pune, Maharashtra 411041</p>
          </div>
        </div>

        

        <div className="contact-card">
          <div className="contact-icon">✉</div>
          <div>
            <h2>Email</h2>
            <a
              href="mailto:dakkhanagrolink20@gmail.com"
              className="contact-email"
            >
              dakkhanagrolink20@gmail.com
            </a>
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