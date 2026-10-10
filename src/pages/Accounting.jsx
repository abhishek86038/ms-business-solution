import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedCard from '../components/AnimatedCard';

export default function Accounting() {
  return (
    <>
      <PageHeader 
        kicker="Practice Areas / Accounting"
        title="Accounting Services"
        subtitle="Professional accounting will give you the resources to create sound plans to cut costs, increase profits and make your business grow."
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=85"
      />

      <section className="section" data-theme="light">
        <div className="container" style={{ maxWidth: '1440px' }}>
          <div className="grid-sidebar" style={{ alignItems: 'start' }}>
            
            {/* Sidebar Navigation & Quick Contact */}
            <div style={{ position: 'sticky', top: 'calc(var(--nav-height) + 2rem)' }}>
              <AnimatedCard variant="alt" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--blue)', marginBottom: '1rem' }}>
                  Our Services
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li>
                    <Link to="/services/accounting" style={{ fontWeight: 600, color: 'var(--blue)', fontSize: '0.9375rem' }}>
                      Accounting &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/taxation" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                      Taxation &rarr;
                    </Link>
                  </li>
                </ul>
              </AnimatedCard>

              <AnimatedCard style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Need Accounting Advice?</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Talk directly with our Chartered Accountants in Norwest Business Park.
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
                  Building Financial Certainty for Your Business
                </h2>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  If you are running your own business, it is critical to get professional accounting support to meet the compliance requirements for taxation and corporation law purposes.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  M&S Business Solutions provides comprehensive accounting services to businesses and individuals across Bella Vista, Norwest, Baulkham Hills, Castle Hill, and surrounding areas.
                </p>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
                Key Accounting Capabilities
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
                
                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Company Structure & Setup</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Assistance with new company set up and selecting the right commercial entity (Sole Trader, Partnership, Company, or Trust) to optimize asset protection and commercial flexibility.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Accounting Systems Implementation</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Establishing robust accounting infrastructure and financial controls so you have transparent visibility over sales, expenses, and operational margins.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Cash Flow & Profit Optimisation</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Expert guidance in optimizing cash flow from day-to-day business activities, managing working capital, and identifying cost-reduction opportunities.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Asset Acquisition Advisory</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Professional guidance in buying plant, equipment, and commercial assets with optimal depreciation, structuring, and financing methods.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>General Ledger & Cash Book Review</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Ongoing reconciliation, ledger hygiene, and financial reviews to prevent discrepancies and ensure error-free statutory reporting.
                  </p>
                </AnimatedCard>

                <AnimatedCard style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--blue)', marginBottom: '0.75rem' }}>Annual Financial Reporting & ASIC</h4>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    Complete preparation of Annual Financial Statements, balance sheets, and statutory documentation, supported by ASIC corporate secretarial support.
                  </p>
                </AnimatedCard>

              </div>

              <AnimatedCard variant="alt" isLarge style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Headed by Chartered Accountant Mandar Gokhale</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  All accounting engagements are directed by Mandar Gokhale, Chartered Accountant from the Institute of Chartered Accountants in Australia, guaranteeing complete professionalism and regulatory adherence.
                </p>
                <Link to="/about" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.9375rem' }}>
                  Learn more about Mandar Gokhale &rarr;
                </Link>
              </AnimatedCard>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
