import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './PracticeCards.css';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust & Introduction Preview */}
      <section className="section section-alt" data-theme="light">
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
      <section className="section" data-theme="light">
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

          <div className="ms-practice-grid">
            {/* Accounting Card */}
            <div className="ms-practice-card">
              <div className="ms-card-visual-wrap">
                {/* Desktop vertical curve SVG */}
                <svg className="ms-card-curve-svg" viewBox="0 0 240 320" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="msBlueGradAcc" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#002366" />
                      <stop offset="55%" stopColor="#003082" />
                      <stop offset="100%" stopColor="#0040a8" />
                    </linearGradient>
                    <linearGradient id="msSwooshGradAcc" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,0 L 205,0 C 248,80 242,220 185,320 L 0,320 Z"
                    fill="url(#msSwooshGradAcc)"
                    className="ms-card-swoosh"
                  />
                  <path
                    d="M 0,0 L 175,0 C 220,85 212,225 155,320 L 0,320 Z"
                    fill="url(#msBlueGradAcc)"
                  />
                </svg>

                {/* Mobile horizontal curve SVG */}
                <svg className="ms-card-curve-svg-mobile" viewBox="0 0 400 155" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="msBlueGradAccMob" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#002366" />
                      <stop offset="60%" stopColor="#003082" />
                      <stop offset="100%" stopColor="#0040a8" />
                    </linearGradient>
                    <linearGradient id="msSwooshGradAccMob" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,0 L 400,0 L 400,110 C 280,165 120,165 0,110 Z"
                    fill="url(#msSwooshGradAccMob)"
                  />
                  <path
                    d="M 0,0 L 400,0 L 400,95 C 280,148 120,148 0,95 Z"
                    fill="url(#msBlueGradAccMob)"
                  />
                </svg>

                <div className="ms-card-visual-inner">
                  <div className="ms-visual-emblem" aria-hidden="true">
                    <svg className="ms-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div className="ms-visual-brand">
                    <span className="ms-visual-kicker">Practice 01</span>
                    <h4 className="ms-visual-title">Financial Clarity</h4>
                    <p className="ms-visual-tagline">Accounting & Reporting</p>
                  </div>
                  <span className="ms-visual-badge">Annual Statements</span>
                </div>
              </div>

              <div className="ms-card-info">
                <div className="ms-card-content">
                  <h3 className="ms-card-title">Accounting</h3>
                  <div className="ms-card-rule" aria-hidden="true" />
                  <p className="ms-card-desc">
                    Professional accounting will give you the resources to create sound plans to cut costs, increase profits and make your business grow.
                  </p>
                </div>
                <Link to="/services/accounting" className="ms-card-link">
                  <span>Accounting services overview</span>
                  <span className="ms-card-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Taxation Card */}
            <div className="ms-practice-card">
              <div className="ms-card-visual-wrap">
                {/* Desktop vertical curve SVG */}
                <svg className="ms-card-curve-svg" viewBox="0 0 240 320" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="msBlueGradTax" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#002366" />
                      <stop offset="55%" stopColor="#003082" />
                      <stop offset="100%" stopColor="#0040a8" />
                    </linearGradient>
                    <linearGradient id="msSwooshGradTax" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,0 L 205,0 C 248,80 242,220 185,320 L 0,320 Z"
                    fill="url(#msSwooshGradTax)"
                    className="ms-card-swoosh"
                  />
                  <path
                    d="M 0,0 L 175,0 C 220,85 212,225 155,320 L 0,320 Z"
                    fill="url(#msBlueGradTax)"
                  />
                </svg>

                {/* Mobile horizontal curve SVG */}
                <svg className="ms-card-curve-svg-mobile" viewBox="0 0 400 155" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="msBlueGradTaxMob" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#002366" />
                      <stop offset="60%" stopColor="#003082" />
                      <stop offset="100%" stopColor="#0040a8" />
                    </linearGradient>
                    <linearGradient id="msSwooshGradTaxMob" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,0 L 400,0 L 400,110 C 280,165 120,165 0,110 Z"
                    fill="url(#msSwooshGradTaxMob)"
                  />
                  <path
                    d="M 0,0 L 400,0 L 400,95 C 280,148 120,148 0,95 Z"
                    fill="url(#msBlueGradTaxMob)"
                  />
                </svg>

                <div className="ms-card-visual-inner">
                  <div className="ms-visual-emblem" aria-hidden="true">
                    <svg className="ms-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="8" y1="6" x2="16" y2="6" />
                      <line x1="8" y1="10" x2="16" y2="10" />
                      <line x1="8" y1="14" x2="12" y2="14" />
                      <circle cx="16" cy="16" r="1.5" />
                    </svg>
                  </div>
                  <div className="ms-visual-brand">
                    <span className="ms-visual-kicker">Practice 02</span>
                    <h4 className="ms-visual-title">Strategic Tax</h4>
                    <p className="ms-visual-tagline">Compliance & Returns</p>
                  </div>
                  <span className="ms-visual-badge">ATO Compliant</span>
                </div>
              </div>

              <div className="ms-card-info">
                <div className="ms-card-content">
                  <h3 className="ms-card-title">Taxation</h3>
                  <div className="ms-card-rule" aria-hidden="true" />
                  <p className="ms-card-desc">
                    What is your tax strategy? Let our professionals guide you to ethically reduce your taxes while growing your business.
                  </p>
                </div>
                <Link to="/services/taxation" className="ms-card-link">
                  <span>Taxation services overview</span>
                  <span className="ms-card-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Call to Action */}
      <section className="section" data-theme="light" style={{ textAlign: 'center', background: '#fff' }}>
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
