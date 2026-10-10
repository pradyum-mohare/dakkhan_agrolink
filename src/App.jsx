import React, { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header page={page} navigate={navigate} />

      <main>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'products' && <Products />}
        {page === 'contact' && <Contact />}
      </main>

      <Footer navigate={navigate} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917020990870?text=Hello%20Dakkhan%20Agrolink%2C%20I%20want%20to%20enquire%20about%20your%20products."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dakkhan Agrolink on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 .5A15.5 15.5 0 0 0 2.7 24l-2 7.3 7.5-2A15.5 15.5 0 1 0 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-4.4 1.2 1.2-4.3-.3-.5A12.8 12.8 0 1 1 16 28.8zm7-9.6c-.4-.2-2.2-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2-1.2-2.7-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.2 5.5.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>
    </div>
  );
}