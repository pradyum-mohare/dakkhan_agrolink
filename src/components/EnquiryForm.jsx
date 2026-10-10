import React, { useState } from 'react';
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber
} from 'libphonenumber-js';

const countryNames = new Intl.DisplayNames(
  ['en'],
  { type: 'region' }
);

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState('IN');
  const [phoneError, setPhoneError] = useState('');
  const [sending, setSending] = useState(false);

  const countries = getCountries()
    .map((code) => ({
      code,
      name: countryNames.of(code) || code,
      callingCode: `+${getCountryCallingCode(code)}`
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const selectedCountry = countries.find(
    (item) => item.code === country
  );

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setPhoneError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const phone = formData.get('Mobile Number');

    // Validate phone number
    const fullPhoneNumber =
      `${selectedCountry.callingCode}${phone}`;

    if (
      !isValidPhoneNumber(
        fullPhoneNumber,
        country
      )
    ) {
      setPhoneError(
        `Please enter a valid ${selectedCountry.name} mobile number.`
      );

      return;
    }

    setPhoneError('');
    setSending(true);

    // Add complete phone number to email
    formData.set(
      'Full Phone Number',
      fullPhoneNumber
    );

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/dakkhanagrolink20@gmail.com',
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
        setCountry('IN');
        setPhoneError('');
      } else {
        alert(
          'Something went wrong. Please try again.'
        );
      }
    } catch (error) {
      alert(
        'Unable to send enquiry. Please try again.'
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="enquiry-success">

        <h3>
          Enquiry Sent Successfully!
        </h3>

        <p>
          Thank you for contacting Dakkhan Agrolink.
          We will contact you shortly.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Send Another Enquiry
        </button>

      </div>
    );
  }

  return (
    <form
      className="enquiry-form"
      onSubmit={handleSubmit}
    >

      {/* Email Subject */}
      <input
        type="hidden"
        name="_subject"
        value="New Dakkhan Agrolink Order Enquiry"
      />

      {/* Email Template */}
      <input
        type="hidden"
        name="_template"
        value="table"
      />

      {/* Captcha */}
      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      {/* Full Name */}
      <div className="form-group">

        <label>
          Full Name *
        </label>

        <input
          type="text"
          name="Full Name"
          placeholder="Enter your full name"
          required
        />

      </div>


      {/* Country */}
      <div className="form-group">

        <label>
          Country *
        </label>

        <select
          name="Country"
          value={country}
          onChange={handleCountryChange}
          required
        >

          {countries.map((item) => (
            <option
              key={item.code}
              value={item.code}
            >
              {item.name} ({item.callingCode})
            </option>
          ))}

        </select>

      </div>


      {/* Mobile Number */}
      <div className="form-group">

        <label>
          Mobile Number *
        </label>

        <div className="phone-row">

          <div className="country-code-display">
            {selectedCountry?.callingCode}
          </div>

          <input
            type="tel"
            name="Mobile Number"
            placeholder="Enter mobile number"
            required
            onChange={() => setPhoneError('')}
          />

        </div>

        {phoneError && (
          <p className="phone-error">
            {phoneError}
          </p>
        )}

      </div>


      {/* Email */}
      <div className="form-group">

        <label>
          Email *
        </label>

        <input
          type="email"
          name="Email"
          placeholder="Enter your email"
          required
        />

      </div>


      {/* Product */}
      <div className="form-group">

        <label>
          Product
        </label>

        <input
          type="text"
          name="Product"
          value="Sugar"
          readOnly
        />

      </div>


      {/* Product Type */}
      <div className="form-group">

        <label>
          Product Type *
        </label>

        <select
          name="Product Type"
          required
        >

          <option value="">
            Select product type
          </option>

          <option value="S30">
            S30
          </option>

          <option value="S31">
            S31
          </option>

          <option value="M30">
            M30
          </option>

          <option value="M31">
            M31
          </option>

          <option value="L30">
            L30
          </option>

          <option value="L31">
            L31
          </option>

        </select>

      </div>


      {/* Quantity + Unit */}
      <div className="form-row">

        <div className="form-group">

          <label>
            Quantity *
          </label>

          <input
            type="number"
            name="Quantity"
            min="1"
            placeholder="Enter quantity"
            required
          />

        </div>


        <div className="form-group">

          <label>
            Unit *
          </label>

          <select
            name="Unit"
            required
          >

            <option value="">
              Select unit
            </option>

            <option value="Kg">
              Kg
            </option>

            <option value="Quintal">
              Quintal
            </option>

            <option value="Ton">
              Ton
            </option>

          </select>

        </div>

      </div>


      {/* Delivery Location */}
      <div className="form-group">

        <label>
          Delivery Location *
        </label>

        <textarea
          name="Delivery Location"
          placeholder="Enter delivery location"
          rows="3"
          required
        />

      </div>


      {/* Additional Requirements */}
      <div className="form-group">

        <label>
          Additional Requirements
        </label>

        <textarea
          name="Additional Requirements"
          placeholder="Any additional requirements?"
          rows="4"
        />

      </div>


      {/* Submit Button */}
      <button
        type="submit"
        className="order-btn"
        disabled={sending}
      >

        {sending
          ? 'Sending...'
          : 'Submit Enquiry'}

      </button>

    </form>
  );
}