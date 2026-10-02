import React from 'react';
import { products } from '../data/products';

export default function Products() {
  return (
    <section className="section products-page">
      <div className="page-heading">
        <p className="eyebrow">OUR CATALOG</p>
        <h1>Products</h1>
        <p className="section-text">
          Explore our available commodities and grades.
        </p>
      </div>

      {products.map((product) => (
        <div key={product.id} className="product-section">

          <div className="catalog-title">
            <span className="product-category">
              {product.category}
            </span>

            <h2>{product.name}</h2>

            <p>{product.description}</p>
          </div>

          <div className="grade-grid">
            {product.types.map((type) => (
              <article className="grade-card" key={type.name}>

                <img
                  src={type.image}
                  alt={`${product.name} ${type.name}`}
                  loading="lazy"
                />

                <div className="grade-info">
                  <h3>{type.name}</h3>
                  <p>White crystal sugar</p>
                </div>

              </article>
            ))}
          </div>

          {/* ONE BUTTON FOR THE ENTIRE SUGAR PRODUCT */}
          <div className="product-enquiry">
            <a
              className="order-btn"
              href="https://forms.gle/vxkqB4Rrtj2yCmaDA"
              target="_blank"
              rel="noreferrer"
            >
              Enquire Now
            </a>

            <p>
              Enquire about any available sugar grade.
            </p>
          </div>

        </div>
      ))}
    </section>
  );
}