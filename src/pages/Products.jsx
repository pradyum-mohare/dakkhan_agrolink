import React from 'react';
import { products } from '../data/products';

export default function Products() {
  return (
    <section className="section products-page">
      <div className="page-heading">
        <p className="eyebrow">OUR CATALOG</p>
        <h1>Products</h1>
        <p className="section-text">Explore our sugar grades and enquire about availability.</p>
      </div>

      {products.map((product) => (
        <div key={product.id}>
          <div className="catalog-title">
            <span className="product-category">{product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>

          <div className="grade-grid">
            {product.types.map((type) => (
              <article className="grade-card" key={type.name}>
                <img src={type.image} alt={`${product.name} ${type.name}`} loading="lazy" decoding="async" />
                <div className="grade-info">
                  <h3>{type.name}</h3>
                  <p>White crystal sugar</p>
                  <a className="order-btn" href="https://forms.google.com/" target="_blank" rel="noreferrer">
                    Enquire / Order
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
      <p className="image-note">
        Product visuals are lightweight illustrative graphics. We can replace them with your own product photographs later.
      </p>
    </section>
  );
}
