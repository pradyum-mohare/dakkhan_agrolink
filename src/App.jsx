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
    </div>
  );
}