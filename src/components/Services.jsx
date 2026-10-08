import React from 'react';

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <h2 style={{ marginBottom: '4rem' }}>Our Services</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Accounting */}
          <div className="grid-sidebar" style={{ paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
            <h3>Accounting</h3>
            <div>
              <p>Professional accounting will give you the resources to create sound plans to cut costs, increase profits and make your business grow.</p>
              <a href="#contact" style={{ color: 'var(--blue)', fontWeight: 500, fontSize: '0.875rem' }}>Discuss accounting →</a>
            </div>
          </div>
          
          {/* Taxation */}
          <div className="grid-sidebar">
            <h3>Taxation</h3>
            <div>
              <p>What is your tax strategy? Let our professionals guide you to ethically reduce your taxes while growing your business.</p>
              <a href="#contact" style={{ color: 'var(--blue)', fontWeight: 500, fontSize: '0.875rem' }}>Discuss taxation →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}