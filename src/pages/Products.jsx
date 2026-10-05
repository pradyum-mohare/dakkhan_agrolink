import React from 'react';
import { products } from '../data/products';
import EnquiryForm from '../components/EnquiryForm';

export default function Products() {
  return (
    <section className="section products-page">

      {/* Page Heading */}
      <div className="page-heading">
        <p className="eyebrow">OUR CATALOG</p>

        <h1>Products</h1>

        <p className="section-text">
          Explore our available commodities and grades.
        </p>
      </div>

      {/* Products */}
      {products.map((product) => (
        <div key={product.id} className="product-section">

          {/* Product Heading */}
          <div className="catalog-title">
            <span className="product-category">
              {product.category}
            </span>

            <h2>{product.name}</h2>

            <p>{product.description}</p>
          </div>

          {/* Sugar Grades */}
          <div className="grade-grid">
            {product.types.map((type) => (
              <article
                className="grade-card"
                key={type.name}
              >
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

          {/* Single Enquiry Button */}
          <div className="product-enquiry">
            <a
              href="#enquiry"
              className="order-btn"
            >
              Enquire Now
            </a>

            <p>
              Enquire about any available sugar grade.
            </p>
          </div>

          {/* Enquiry Form */}
          <div
            id="enquiry"
            className="enquiry-section"
          >
            <div className="catalog-title">
              <span className="product-category">
                GET IN TOUCH
              </span>

              <h2>Place an Enquiry</h2>

              <p>
                Send us your requirements and our team
                will contact you shortly.
              </p>
            </div>

            <EnquiryForm />
          </div>

        </div>
      ))}

    </section>
  );
}