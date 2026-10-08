import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2>Ready to discuss your business?</h2>
        <p style={{ margin: '0 auto 2rem auto' }}>
          Contact us today to schedule a consultation with our experienced team in Norwest.
        </p>
        <a href="mailto:info@msbusinesssolutions.com.au" className="btn btn-primary">Book a Consultation</a>
      </div>
    </section>
  );
}