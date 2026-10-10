import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ContactBand from '../components/ContactBand';
import { taxation, business, accounting } from '../data/images';
import './Services.css';

export default function Services() {
  const location = useLocation();

  // Smooth scroll to section if URL has a hash (e.g. /services#business-services)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const taxationItems = [
    'Tax structures',
    'GST',
    'Tax planning',
    'Salary packaging',
    'Capital gains tax',
    'Tax strategy development and implementation',
    'Dealing with Australian Taxation Office matters and audit defence',
    'Tax returns, including extended lodgement deadlines (in most instances)',
    'Tax advice, such as minimising CGT or optimising residency changes'
  ];

  const businessItems = [
    'Tax structures',
    'Fringe benefits tax',
    'ASIC support services',
    'Structuring of businesses',
    'Cash book and general ledger review and support',
    'Annual taxation returns and financial reports',
    'Optimal methods of business and investment purchases',
    'Business Activity Statement preparation, support and lodgement',
    'Preparation and lodgement of all types of tax returns'
  ];

  const accountingItems = [
    'Company structure',
    'Setting up accounting systems',
    'Assistance with new company set up',
    'Choosing the right entity for your business',
    'Guidance in buying assets with optimal taxation opportunity',
    'Guidance in optimising cash flow from business activities'
  ];

  const CheckIcon = () => (
    <span className="ms-services-check-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="#2f3fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 10 8 14 16 6" />
      </svg>
    </span>
  );

  return (
    <div className="ms-services-scope">
      {/* 1. Page Header (Kept intact) */}
      <PageHeader 
        kicker="Practice Areas"
        title="Our Services"
        subtitle="Specialized accounting, taxation, and business advisory services designed to give your business clarity, total compliance, and sustainable growth."
      />

      {/* ====================================================================
          GROUP 1: TAXATION
          ==================================================================== */}
      <section id="taxation" className="ms-services-section ms-services-section--white" data-theme="light">
        <div className="ms-services-container">
          <div className="ms-services-grid">
            
            {/* Content Column */}
            <div className="ms-services-content">
              <Reveal>
                <span className="ms-services-tag">01 / Taxation</span>
                <h2 className="ms-services-heading">Taxation Services</h2>
                <p className="ms-services-intro">
                  M&amp;S Business Solutions provides the following tax services to businesses and individuals in Bella Vista, Norwest, Baulkham Hills, Castle Hill and surrounding areas.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ul className="ms-services-checklist">
                  {taxationItems.map((item, idx) => (
                    <li key={idx} className="ms-services-item">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={180}>
                <Link to="/services/taxation" className="ms-services-detail-link">
                  <span>Taxation services overview</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
            </div>

            {/* Media Column (Photo with offset blue rectangle) */}
            <Reveal delay={150}>
              <div className="ms-services-media">
                <div className="ms-services-offset-bg" aria-hidden="true" />
                <div className="ms-services-photo-card">
                  <img 
                    src={taxation} 
                    alt="Tax compliance documents, statutory returns and review documents"
                    className="ms-services-img"
                    width={1400}
                    height={933}
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ====================================================================
          GROUP 2: BUSINESS SERVICES (Alternating Left/Right)
          ==================================================================== */}
      <section id="business-services" className="ms-services-section ms-services-section--light" data-theme="light">
        <div className="ms-services-container">
          <div className="ms-services-grid ms-services-grid--reverse">
            
            {/* Media Column on Left */}
            <Reveal delay={150}>
              <div className="ms-services-media">
                <div className="ms-services-offset-bg" aria-hidden="true" />
                <div className="ms-services-photo-card">
                  <img 
                    src={business} 
                    alt="Small business workspace, structuring and advisory analytics"
                    className="ms-services-img"
                    width={1400}
                    height={933}
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

            {/* Content Column on Right */}
            <div className="ms-services-content">
              <Reveal>
                <span className="ms-services-tag">02 / Business Services</span>
                <h2 className="ms-services-heading">Business Services</h2>
                <p className="ms-services-intro">
                  Practical support for setting up, structuring and running your business.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ul className="ms-services-checklist">
                  {businessItems.map((item, idx) => (
                    <li key={idx} className="ms-services-item">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          GROUP 3: ACCOUNTING (Alternating Left/Right)
          ==================================================================== */}
      <section id="accounting" className="ms-services-section ms-services-section--white" data-theme="light">
        <div className="ms-services-container">
          <div className="ms-services-grid">
            
            {/* Content Column on Left */}
            <div className="ms-services-content">
              <Reveal>
                <span className="ms-services-tag">03 / Accounting</span>
                <h2 className="ms-services-heading">Accounting Services</h2>
                <p className="ms-services-intro">
                  If you are running your own business, it is critical to get professional accounting support to meet the compliance requirements for taxation and corporation law purposes.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ul className="ms-services-checklist">
                  {accountingItems.map((item, idx) => (
                    <li key={idx} className="ms-services-item">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={180}>
                <Link to="/services/accounting" className="ms-services-detail-link">
                  <span>Accounting services overview</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
            </div>

            {/* Media Column on Right */}
            <Reveal delay={150}>
              <div className="ms-services-media">
                <div className="ms-services-offset-bg" aria-hidden="true" />
                <div className="ms-services-photo-card">
                  <img 
                    src={accounting} 
                    alt="Accounting spreadsheets, financial statements and calculation review"
                    className="ms-services-img"
                    width={1400}
                    height={933}
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ====================================================================
          BOTTOM CONTACT BAND
          ==================================================================== */}
      <ContactBand />
    </div>
  );
}
