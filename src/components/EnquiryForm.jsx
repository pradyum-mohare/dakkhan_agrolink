import React, { useState } from 'react';

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/pradyummohare11@gmail.com',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Unable to send enquiry. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="enquiry-success">
        <h3>Enquiry Sent Successfully!</h3>
        <p>
          Thank you for contacting Dakkhan Agrolink.
          We will contact you shortly.
        </p>

        <button onClick={() => setSubmitted(false)}>
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>

      <input
        type="hidden"
        name="_subject"
        value="New Dakkhan Agrolink Order Enquiry"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          name="Full Name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label>Mobile Number *</label>
        <input
          type="tel"
          name="Mobile Number"
          placeholder="Enter your mobile number"
          required
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="Email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label>Product</label>
        <input
          type="text"
          name="Product"
          value="Sugar"
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Product Type *</label>
        <select name="Product Type" required>
          <option value="">Select product type</option>
          <option value="S30">S30</option>
          <option value="S31">S31</option>
          <option value="M30">M30</option>
          <option value="M31">M31</option>
          <option value="L30">L30</option>
          <option value="L31">L31</option>
        </select>
      </div>

      <div className="form-row">

        <div className="form-group">
          <label>Quantity *</label>
          <input
            type="number"
            name="Quantity"
            min="1"
            placeholder="Enter quantity"
            required
          />
        </div>

        <div className="form-group">
          <label>Unit *</label>
          <select name="Unit" required>
            <option value="">Select unit</option>
            <option value="Kg">Kg</option>
            <option value="Quintal">Quintal</option>
            <option value="Ton">Ton</option>
          </select>
        </div>

      </div>

      <div className="form-group">
        <label>Delivery Location *</label>
        <textarea
          name="Delivery Location"
          placeholder="Enter delivery location"
          rows="3"
          required
        />
      </div>

      <div className="form-group">
        <label>Additional Requirements</label>
        <textarea
          name="Additional Requirements"
          placeholder="Any additional requirements?"
          rows="4"
        />
      </div>

      <button type="submit" className="order-btn">
        Submit Enquiry
      </button>

    </form>
  );
}