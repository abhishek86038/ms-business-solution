import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedCard from '../components/AnimatedCard';

export default function Services() {
  return (
    <>
      <PageHeader 
        kicker="Practice Areas"
        title="Our Services"
        subtitle="M&S Business Solutions focuses strictly on two specialized disciplines: Accounting and Taxation. Our focused model ensures deep expertise, meticulous compliance, and proactive financial guidance."
      />

      <section className="section" data-theme="light">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

            {/* Service 1: Accounting Card */}
            <AnimatedCard isLarge style={{ padding: '3.5rem 3rem' }}>
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', 
                  gap: '4rem', 
                  alignItems: 'start'
                }}
              >
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem' }}>
                    Service 01
                  </p>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Accounting</h2>
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.55, color: 'var(--text)', marginBottom: '1.5rem', fontWeight: 400 }}>
                    "Professional accounting will give you the resources to create sound plans to cut costs, increase profits and make your business grow."
                  </p>
                  <Link to="/services/accounting" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                    Explore Accounting Services &rarr;
                  </Link>
                </div>

                <div>
                  <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    If you are running your own business, it is critical to get professional accounting support to meet the compliance requirements for taxation and corporation law purposes. We help you choose the right entity, configure reliable systems, and monitor performance.
                  </p>
                  <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--blue)', marginBottom: '1rem' }}>
                    Core Areas Covered:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Company Structure & Entity Selection
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Setting Up Accounting Systems
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Cash Flow & Profit Optimisation
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Asset Purchase Guidance
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> ASIC Compliance & Statutory Reporting
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> General Ledger & Book Review
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            {/* Service 2: Taxation Card */}
            <AnimatedCard isLarge style={{ padding: '3.5rem 3rem' }}>
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', 
                  gap: '4rem', 
                  alignItems: 'start'
                }}
              >
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.75rem' }}>
                    Service 02
                  </p>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Taxation</h2>
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.55, color: 'var(--text)', marginBottom: '1.5rem', fontWeight: 400 }}>
                    "What is your tax strategy? Let our professionals guide you to ethically reduce your taxes while growing your business."
                  </p>
                  <Link to="/services/taxation" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                    Explore Taxation Services &rarr;
                  </Link>
                </div>

                <div>
                  <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Taxation laws in Australia are complex and frequently updated. We provide proactive, legitimate tax strategies and compliance services that safeguard your business against liabilities while optimizing every legally available deduction.
                  </p>
                  <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--blue)', marginBottom: '1rem' }}>
                    Core Areas Covered:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Strategic Tax Planning & Structuring
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Business Activity Statements (BAS & GST)
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Corporate & Individual Tax Returns
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Capital Gains Tax (CGT) Optimisation
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> ATO Matters & Audit Defence
                    </li>
                    <li style={{ fontSize: '0.9375rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>&bull;</span> Extended Lodgement Deadlines
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>Need tailored financial advice?</h2>
          <p style={{ margin: '0 auto 2rem auto', fontSize: '1.125rem' }}>
            Book a confidential consultation with our Chartered Accountants in Bella Vista.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
