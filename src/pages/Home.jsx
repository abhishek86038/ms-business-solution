import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import ContactBand from '../components/ContactBand';
import ChladniBackground from '../components/chladni/ChladniBackground';
import { office1, accounting, taxation, business } from '../data/images';
import './Home.css';

export default function Home() {
  const practiceAreas = [
    {
      num: '01',
      title: 'Accounting',
      image: accounting,
      alt: 'Financial spreadsheets, accounting calculator and ledger records',
      bullets: [
        'Company structure',
        'Setting up accounting systems',
        'Choosing the right entity',
        'Optimising cash flow'
      ],
      linkText: 'Accounting services',
      linkUrl: '/services/accounting'
    },
    {
      num: '02',
      title: 'Taxation',
      image: taxation,
      alt: 'Tax compliance documents, statutory returns and review documents',
      bullets: [
        'Tax planning',
        'GST',
        'Capital gains tax',
        'ATO matters and audit defence'
      ],
      linkText: 'Taxation services',
      linkUrl: '/services/taxation'
    },
    {
      num: '03',
      title: 'Business Services',
      image: business,
      alt: 'Small business owner review, corporate analytics and structuring desk',
      bullets: [
        'ASIC support',
        'Business structuring',
        'BAS preparation and lodgement',
        'Annual returns and financial reports'
      ],
      linkText: 'Business services',
      linkUrl: '/services#business-services'
    }
  ];

  const clientTypes = [
    {
      title: 'Small Business',
      desc: 'Accounts, BAS and tax kept up to date.',
      rowClass: 'ms-home-who-card--r1'
    },
    {
      title: 'Companies',
      desc: 'Company structure, financial statements and returns.',
      rowClass: 'ms-home-who-card--r1'
    },
    {
      title: 'Self Employed',
      desc: 'Clear records and tax returns for sole traders.',
      rowClass: 'ms-home-who-card--r1'
    },
    {
      title: 'SMSF',
      desc: 'Accounting and tax compliance for your fund.',
      rowClass: 'ms-home-who-card--r1'
    },
    {
      title: 'Partnerships',
      desc: 'Accurate accounts for every partner.',
      rowClass: 'ms-home-who-card--r2'
    },
    {
      title: 'Trusts',
      desc: 'Trust accounts and tax returns done properly.',
      rowClass: 'ms-home-who-card--r2'
    },
    {
      title: 'Individuals',
      desc: 'Tax returns and advice for your personal situation.',
      rowClass: 'ms-home-who-card--r2'
    }
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Introductory consultation',
      desc: 'We learn about your business and goals.'
    },
    {
      num: '02',
      title: 'Review of your position',
      desc: 'We look at your accounts, structure and tax.'
    },
    {
      num: '03',
      title: 'Clear next steps',
      desc: 'You get a plan and we get to work.'
    }
  ];

  return (
    <div className="ms-home-scope">
      {/* 1. Hero Section (Untouched) */}
      <Hero />

      {/* ====================================================================
          A) INTRO WITH PHOTO
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--light" data-theme="light">
        <div className="ms-home-container">
          <div className="ms-home-intro-grid">
            
            {/* Left: Introduction Text */}
            <div className="ms-home-intro-text">
              <Reveal>
                <p className="ms-home-eyebrow">
                  Chartered Accounting Practice
                </p>
                <h2 className="ms-home-heading">
                  Clear financial direction for Sydney businesses and individuals.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="ms-home-subheading">
                  Situated in Norwest Business Park, Bella Vista, M&amp;S Business Solutions offers tailored taxation and accounting services designed to eliminate compliance uncertainty, optimize tax outcomes, and build sustainable commercial growth.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <Link to="/about" className="ms-home-intro-link">
                  Learn more about our practice &rarr;
                </Link>
              </Reveal>
            </div>

            {/* Right: Office Photo with Offset Blue Backdrop & Floating Card */}
            <Reveal delay={150}>
              <div className="ms-home-intro-media">
                <div className="ms-home-intro-offset-bg" aria-hidden="true" />
                <div className="ms-home-intro-photo-card">
                  <img
                    src={office1}
                    alt="M&S Business Solutions modern office in Norwest Business Park"
                    className="ms-home-intro-img"
                    width={1400}
                    height={1050}
                    loading="lazy"
                  />
                </div>

                {/* Floating white card */}
                <div className="ms-home-intro-badge">
                  <div className="ms-home-intro-pin-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="ms-home-intro-badge-content">
                    <p className="ms-home-intro-badge-title">Norwest Business Park</p>
                    <p className="ms-home-intro-badge-sub">Bella Vista, Sydney</p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ====================================================================
          B) STATS STRIP
          ==================================================================== */}
      <section className="ms-home-stats-strip" aria-label="Key firm figures">
        <Reveal>
          <div className="ms-home-stats-grid">
            <div className="ms-home-stat-col">
              <span className="ms-home-stat-num">
                <CountUp end={10} suffix="+" />
              </span>
              <span className="ms-home-stat-label">Years of Experience</span>
            </div>
            <div className="ms-home-stat-col">
              <span className="ms-home-stat-num">
                <CountUp end={3} />
              </span>
              <span className="ms-home-stat-label">Practice Areas</span>
            </div>
            <div className="ms-home-stat-col">
              <span className="ms-home-stat-num">
                <CountUp end={7} />
              </span>
              <span className="ms-home-stat-label">Client Types</span>
            </div>
            <div className="ms-home-stat-col">
              <span className="ms-home-stat-num">
                <CountUp end={4} />
              </span>
              <span className="ms-home-stat-label">Suburbs Served</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ====================================================================
          C) PRACTICE AREAS (Animated Chladni particle background)
          ==================================================================== */}
      <section className="ms-home-practice-section" data-theme="dark">
        <ChladniBackground />
        <div className="ms-home-container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="ms-home-practice-header">
              <p className="ms-home-eyebrow">Core capabilities</p>
              <h2 className="ms-home-heading" style={{ marginBottom: 0 }}>
                Our Three Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="ms-home-practice-grid">
            {practiceAreas.map((area, idx) => (
              <Reveal key={area.num} delay={idx * 120} style={{ height: '100%' }}>
                <article className="ms-home-practice-card">
                  <div className="ms-home-practice-media">
                    <img
                      src={area.image}
                      alt={area.alt}
                      className="ms-home-practice-img"
                      width={1400}
                      height={933}
                      loading="lazy"
                    />
                  </div>
                  <div className="ms-home-practice-body">
                    <div className="ms-home-practice-top">
                      <span className="ms-home-practice-tag">{area.num}</span>
                    </div>
                    <h3 className="ms-home-practice-title">{area.title}</h3>
                    <ul className="ms-home-practice-bullets">
                      {area.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="ms-home-practice-bullet">
                          <span className="ms-home-practice-bullet-dot" aria-hidden="true">&bull;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={area.linkUrl} className="ms-home-practice-link">
                      <span>{area.linkText}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          D) WHO WE WORK WITH
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--light" data-theme="light">
        <div className="ms-home-container">
          <Reveal>
            <div className="ms-home-who-header">
              <p className="ms-home-eyebrow">Who We Work With</p>
              <h2 className="ms-home-heading" style={{ marginBottom: 0 }}>
                Accounting and tax for every kind of client
              </h2>
            </div>
          </Reveal>

          <div className="ms-home-who-grid">
            {clientTypes.map((item, idx) => (
              <Reveal key={idx} delay={idx * 60} className={item.rowClass}>
                <div className="ms-home-who-card">
                  <h3 className="ms-home-who-card-title">{item.title}</h3>
                  <p className="ms-home-who-card-desc">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          E) MEET MANDAR (Team component rendered exactly ONCE)
          ==================================================================== */}
      <Team />

      {/* ====================================================================
          F) HOW WE WORK
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--white" data-theme="light">
        <div className="ms-home-container">
          <Reveal>
            <div className="ms-home-process-header">
              <p className="ms-home-eyebrow">Our Process</p>
              <h2 className="ms-home-heading" style={{ marginBottom: 0 }}>
                Simple from the first call
              </h2>
            </div>
          </Reveal>

          <div className="ms-home-process-track">
            <div className="ms-home-process-line" aria-hidden="true" />
            {workSteps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 120} className="ms-home-process-step">
                <div className="ms-home-process-circle">{step.num}</div>
                <h3 className="ms-home-process-title">{step.title}</h3>
                <p className="ms-home-process-desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          G) CONTACT BAND
          ==================================================================== */}
      <ContactBand />

      {/* Hero section responsive style overrides (Untouched) */}
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
    </div>
  );
}
