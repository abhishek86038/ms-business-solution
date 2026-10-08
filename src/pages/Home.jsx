import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust & Introduction Preview */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div style={{ maxWidth: '820px' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>
              Chartered Accounting Practice
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 2.75vw, 2.85rem)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
              Clear financial direction for Sydney businesses and individuals.
            </h2>
            <p style={{ fontSize: '1.1875rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Situated in Norwest Business Park, Bella Vista, M&S Business Solutions offers tailored taxation and accounting services designed to eliminate compliance uncertainty, optimize tax outcomes, and build sustainable commercial growth.
            </p>
            <Link to="/about" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Learn more about our practice &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section (Only Accounting & Taxation) */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem' }}>
                Core Capabilities
              </p>
              <h2 style={{ marginBottom: 0 }}>Our Two Practice Areas</h2>
            </div>
            <Link to="/services" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9375rem' }}>
              View all services &rarr;
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
            {/* Accounting Card */}
            <div style={{ border: '1px solid var(--border)', padding: '3rem 2.5rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.65rem', marginBottom: '1rem' }}>Accounting</h3>
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Professional accounting will give you the resources to create sound plans to cut costs, increase profits and make your business grow.
                </p>
              </div>
              <Link
                to="/services/accounting"
                style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Accounting services overview &rarr;
              </Link>
            </div>

            {/* Taxation Card */}
            <div style={{ border: '1px solid var(--border)', padding: '3rem 2.5rem', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.65rem', marginBottom: '1rem' }}>Taxation</h3>
                <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  What is your tax strategy? Let our professionals guide you to ethically reduce your taxes while growing your business.
                </p>
              </div>
              <Link
                to="/services/taxation"
                style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Taxation services overview &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Preview */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem' }}>
                Leadership
              </p>
              <h2 style={{ marginBottom: '1rem' }}>Our People</h2>
              <h3 style={{ color: 'var(--text)', marginBottom: '0.25rem' }}>Mandar Gokhale</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '1.5rem' }}>
                Principal Chartered Accountant
              </p>
              <p style={{ lineHeight: 1.7, marginBottom: '2rem' }}>
                M&S Business Solutions is headed by Mandar Gokhale, a seasoned Chartered Accountant from the Institute of Chartered Accountants in Australia with over a decade of specialized expertise in corporate and tax advisory.
              </p>
              <Link to="/our-people" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9375rem' }}>
                Read full profile &rarr;
              </Link>
            </div>
            <div>
              <img
                src="/src/assets/mandar-cutout.webp"
                alt="Mandar Gokhale"
                style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: '2px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Call to Action */}
      <section className="section" style={{ textAlign: 'center', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', marginBottom: '1.25rem' }}>
            Ready to discuss your business?
          </h2>
          <p style={{ fontSize: '1.1875rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Schedule an introductory consultation with our experienced team in Norwest Business Park.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
            Book a Consultation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            padding-top: calc(var(--nav-height) + 2rem) !important;
            padding-bottom: 3rem !important;
          }
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-content {
            max-width: 100% !important;
            padding-top: 0 !important;
          }
          .hero-media img {
            height: clamp(360px, 52vh, 520px) !important;
          }
        }
      `}</style>
    </>
  );
}
