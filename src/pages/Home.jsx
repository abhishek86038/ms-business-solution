import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import ContactBand from '../components/ContactBand';
import ChladniBackground from '../components/chladni/ChladniBackground';
import { office1, accounting, taxation, business } from '../data/images';
import taxUpdates from '../data/taxUpdates';
import './Home.css';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

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

  const whyPoints = [
    {
      badge: '01',
      title: 'Qualified and local',
      desc: 'Led by Mandar Gokhale, a Chartered Accountant, in Norwest Business Park.'
    },
    {
      badge: '02',
      title: 'One team for accounts and tax',
      desc: 'Your accounting, tax returns, BAS and company matters handled in one place.'
    },
    {
      badge: '03',
      title: 'Clear communication',
      desc: 'Plain language, no jargon.'
    },
    {
      badge: '04',
      title: 'Compliance first',
      desc: 'Lodgements and deadlines kept in order so nothing is missed.'
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

  const latestTaxUpdates = taxUpdates.slice(0, 3);

  const faqItems = [
    {
      q: 'What does an introductory consultation involve?',
      a: 'A relaxed conversation about your business and goals so we can explain how we can help.'
    },
    {
      q: 'Which areas do you serve?',
      a: 'Bella Vista, Norwest, Baulkham Hills, Castle Hill and surrounding areas of Sydney.'
    },
    {
      q: 'Do you work with individuals as well as businesses?',
      a: 'Yes. We work with individuals, self-employed people, small businesses, companies, partnerships, trusts and SMSFs.'
    },
    {
      q: 'Can you help me choose the right business structure?',
      a: 'Yes. Choosing the right entity is part of our accounting and business services.'
    },
    {
      q: 'How do I get started?',
      a: 'Book a consultation or call 02 8814 7905 or 02 8824 3712.',
      isContactAnswer: true
    }
  ];

  return (
    <div className="ms-home-scope">
      {/* Hero Section (Untouched) */}
      <Hero />

      {/* ====================================================================
          1. INTRO WITH PHOTO
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--light" data-theme="light">
        <div className="ms-home-container">
          <div className="ms-home-intro-grid">
            {/* Left: Introduction Text */}
            <div className="ms-home-intro-text">
              <Reveal>
                <p className="ms-home-eyebrow">Chartered Accounting Practice</p>
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

                {/* Small white floating card */}
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
          2. STATS STRIP (4 columns, 2x2 on mobile, CountUp)
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
          3. PRACTICE AREAS (Chladni Background, Dark Section, White Cards)
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
              <Reveal key={area.num} delay={idx * 110} style={{ height: '100%' }}>
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
          4. WHO WE WORK WITH (7 Cards, Hover turns blue)
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
              <Reveal key={idx} delay={idx * 90} className={item.rowClass}>
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
          5. WHY M&S (2x2 Grid with Blue Badges)
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--white" data-theme="light">
        <div className="ms-home-container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
              <p className="ms-home-eyebrow">Why M&amp;S Business Solutions</p>
              <h2 className="ms-home-heading" style={{ marginBottom: 0 }}>
                A personal approach backed by technical expertise
              </h2>
            </div>
          </Reveal>

          <div className="ms-home-why-grid">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.badge} delay={idx * 100} style={{ height: '100%' }}>
                <div className="ms-home-why-card">
                  <div className="ms-home-why-badge">{point.badge}</div>
                  <h3 className="ms-home-why-title">{point.title}</h3>
                  <p className="ms-home-why-desc">{point.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. HOW WE WORK (3 Steps with Connecting Line)
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--light" data-theme="light">
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
              <Reveal key={step.num} delay={idx * 110} className="ms-home-process-step">
                <div className="ms-home-process-circle">{step.num}</div>
                <h3 className="ms-home-process-title">{step.title}</h3>
                <p className="ms-home-process-desc">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. MEET MANDAR (Team component rendered exactly ONCE)
          ==================================================================== */}
      <Team />

      {/* ====================================================================
          8. TAX UPDATE TEASER
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--light" data-theme="light">
        <div className="ms-home-container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <p className="ms-home-eyebrow">Stay informed</p>
              <h2 className="ms-home-heading" style={{ marginBottom: '12px' }}>
                Tax Update
              </h2>
              <p className="ms-home-subheading" style={{ marginBottom: 0 }}>
                Key tax and compliance news for Australian businesses and individuals.
              </p>
            </div>
          </Reveal>

          <div className="ms-home-teaser-grid">
            {latestTaxUpdates.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 100} style={{ height: '100%' }}>
                <article className="ms-home-teaser-card">
                  <span className="ms-home-teaser-date">{item.date}</span>
                  <h3 className="ms-home-teaser-title">{item.title}</h3>
                  <p className="ms-home-teaser-summary">{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="ms-home-teaser-cta">
              <Link to="/tax-update" className="ms-home-teaser-btn">
                <span>See all tax updates</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================================================================
          9. FAQ (Accordion, Keyboard Accessible, One Open at a Time)
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--white" data-theme="light">
        <div className="ms-home-container">
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <p className="ms-home-eyebrow">Common Questions</p>
              <h2 className="ms-home-heading" style={{ marginBottom: 0 }}>
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="ms-home-faq-wrapper">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <Reveal key={idx} delay={idx * 90}>
                  <div className={`ms-home-faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="ms-home-faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      id={`faq-question-${idx}`}
                    >
                      <h3 className="ms-home-faq-question">{item.q}</h3>
                      <span className="ms-home-faq-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className={`ms-home-faq-collapse ${isOpen ? 'is-open' : ''}`}
                    >
                      <div className="ms-home-faq-collapse-inner">
                        {item.isContactAnswer ? (
                          <p className="ms-home-faq-answer">
                            Book a <Link to="/contact">consultation</Link> or call{' '}
                            <a href="tel:+61288147905">02 8814 7905</a> or{' '}
                            <a href="tel:+61288243712">02 8824 3712</a>.
                          </p>
                        ) : (
                          <p className="ms-home-faq-answer">{item.a}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. CONTACT BAND
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
