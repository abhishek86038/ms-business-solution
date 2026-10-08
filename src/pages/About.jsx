import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader 
        kicker="About M&S Business Solutions"
        title="Trusted Chartered Accounting in Norwest Business Park"
        subtitle="Complete taxation and accounting services for businesses and individuals across Sydney, built on integrity, technical rigor, and personal relationships."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid-2" style={{ alignItems: 'start', gap: '5rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Practice Story</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Situated in Bella Vista, Norwest Business Park, M&S Business Solutions offers comprehensive taxation and accounting advisory services to businesses and individuals all over Sydney.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We believe that accounting is more than just compliance and year-end lodgements. Professional accounting provides business leaders with the clarity and resources needed to create sound operational plans, reduce overheads, increase profitability, and sustainably scale.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Led by Mandar Gokhale, a seasoned Chartered Accountant from the Institute of Chartered Accountants in Australia, our firm provides the high-level technical standards of a major practice combined with the direct accessibility and genuine care of a boutique firm.
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Core Principles</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--blue)', marginBottom: '0.5rem' }}>Absolute Transparency</h4>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                      No jargon, hidden fees, or ambiguous advice. We communicate with clear facts and actionable insights.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--blue)', marginBottom: '0.5rem' }}>Direct Partner Access</h4>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                      You work directly with qualified chartered accountants who understand your history and objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="M&S Business Solutions Norwest Office" 
                style={{ width: '100%', height: '560px', objectFit: 'cover', borderRadius: '2px', marginBottom: '2rem' }} 
              />
              <div style={{ background: 'var(--bg-alt)', padding: '2rem', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text)' }}>Location & Regional Focus</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: 1.6 }}>
                  Based in Suite 306, Building A, 1 Burbank Place, Norwest Business Park, Baulkham Hills, serving Bella Vista, Castle Hill, the Hills Shire, and clients across Greater Sydney.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>Speak with our team</h2>
          <p style={{ margin: '0 auto 2rem auto', fontSize: '1.125rem' }}>
            Whether you are establishing a new entity or seeking strategic tax planning, we welcome the opportunity to discuss your goals.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
