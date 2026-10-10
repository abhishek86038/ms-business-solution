import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedCard from '../components/AnimatedCard';

export default function Taxation() {
  return (
    <>
      <PageHeader 
        kicker="Practice Areas / Taxation"
        title="Taxation Services"
        subtitle="What is your tax strategy? Let our professionals guide you to ethically reduce your taxes while growing your business."
        bgImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="section" data-theme="light">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid-sidebar" style={{ alignItems: 'start' }}>
            
            {/* Sidebar Navigation */}
            <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 2rem)' }}>
              <AnimatedCard variant="alt" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--blue)', marginBottom: '1rem' }}>
                  Our Services
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li>
                    <Link to="/services/accounting" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                      Accounting &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/taxation" style={{ fontWeight: 600, color: 'var(--blue)', fontSize: '0.9375rem' }}>
                      Taxation &rarr;
                    </Link>
                  </li>
                </ul>
              </AnimatedCard>

              <AnimatedCard style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Review Your Tax Position</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Speak with our registered tax agents to plan and optimize your tax strategy.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
                  Book Consultation
                </Link>
              </AnimatedCard>
            </div>

            {/* Main Content Area */}
            <div>
              <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>
                  Ethical, Strategic Tax Planning & Lodgement
                </h2>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  M&S Business Solutions provides comprehensive Tax Services to businesses and individuals in Bella Vista, Norwest, Baulkham Hills, Castle Hill, and surrounding areas.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Our focus is on delivering proactive tax strategy development and implementation, ensuring you fulfill all ATO obligations accurately while legally minimising liabilities.
                </p>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
                Taxation Practice Areas
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
                
                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Tax Planning & Structuring</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Strategic development and implementation of tax structures designed to safeguard wealth, retain profits, and lawfully minimize tax liabilities for the long term.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>BAS & GST Compliance</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Accurate Business Activity Statement (BAS) preparation, reconciliation, and timely lodgement with the Australian Taxation Office (ATO).
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>All Tax Returns & Extended Lodgement</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Preparation and lodgement of corporate, trust, partnership, SMSF, and individual returns. As registered tax agents, we offer extended lodgement deadlines in most instances.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Capital Gains Tax (CGT) Advisory</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Expert advice on minimising CGT events, applying small business CGT concessions, and restructuring property and commercial portfolios.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>ATO Matters & Audit Defence</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Authoritative representation and management of Australian Taxation Office queries, debt arrangements, reviews, and audit defences.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Salary Packaging & FBT</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Fringe Benefit Tax (FBT) compliance, salary packaging optimization for key executives, and review of employee financial benefit structures.
                  </p>
                </AnimatedCard>

              </div>

              <AnimatedCard variant="alt" isLarge style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Registered Tax Agent Guidance</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Our registered tax agents provide rigorous, ethical compliance to ensure your business remains fully compliant with Commonwealth and State revenue legislation.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Book a Tax Consultation
                </Link>
              </AnimatedCard>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
