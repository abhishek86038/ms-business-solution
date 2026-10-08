import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Accounting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader 
        kicker="Get in Touch"
        title="Book a Consultation"
        subtitle="Contact our office in Norwest Business Park to arrange a confidential consultation regarding your accounting or taxation needs."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid-2" style={{ alignItems: 'start', gap: '5rem' }}>
            
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Office Information</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                Our offices are conveniently located within Norwest Business Park in Bella Vista, with dedicated client parking and accessible public transport connections.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Physical Address
                  </h4>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
                    Suite 306, Building A, 1 Burbank Place<br />
                    Norwest Business Park, Bella Vista NSW 2153
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Postal Address
                  </h4>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
                    P. O. Box 7344, Baulkham Hills NSW 2153
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Telephone
                  </h4>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
                    (02) 8814 7905<br />
                    (02) 8824 3712
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Email
                  </h4>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--text)', margin: 0 }}>
                    <a href="mailto:info@msbusinesssolutions.com.au" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>
                      info@msbusinesssolutions.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Request Form */}
            <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '3rem 2.5rem' }}>
              <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem' }}>Request a Consultation</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Please fill in the form below and one of our chartered accountants will contact you promptly.
              </p>

              {submitted ? (
                <div style={{ padding: '2rem', background: 'var(--bg-alt)', border: '1px solid var(--blue)', textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--blue)', marginBottom: '0.5rem' }}>Thank You</h4>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', margin: 0 }}>
                    Your consultation request has been received. Our team in Norwest will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      style={{ 
                        width: '100%', 
                        padding: '0.85rem 1rem', 
                        border: '1px solid var(--border)', 
                        fontSize: '0.9375rem',
                        boxSizing: 'border-box'
                      }} 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        style={{ 
                          width: '100%', 
                          padding: '0.85rem 1rem', 
                          border: '1px solid var(--border)', 
                          fontSize: '0.9375rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0400 000 000"
                        style={{ 
                          width: '100%', 
                          padding: '0.85rem 1rem', 
                          border: '1px solid var(--border)', 
                          fontSize: '0.9375rem',
                          boxSizing: 'border-box'
                        }} 
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>
                      Primary Service Needed *
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ 
                        width: '100%', 
                        padding: '0.85rem 1rem', 
                        border: '1px solid var(--border)', 
                        fontSize: '0.9375rem',
                        background: '#fff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Accounting">Accounting Services</option>
                      <option value="Taxation">Taxation Services</option>
                      <option value="Both">Both Accounting & Taxation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)' }}>
                      Brief Overview of Your Enquiry
                    </label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist..."
                      style={{ 
                        width: '100%', 
                        padding: '0.85rem 1rem', 
                        border: '1px solid var(--border)', 
                        fontSize: '0.9375rem',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box'
                      }} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ padding: '0.95rem 2rem', fontSize: '1rem', width: '100%' }}
                  >
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
