import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import ContactBand from '../components/ContactBand';
import ChladniBackground from '../components/chladni/ChladniBackground';
import ExpandingPanels from '../components/ExpandingPanels';
import FlipCard from '../components/FlipCard';
import LightBeams from '../components/LightBeams';
import PhotonGrid from '../components/PhotonGrid';
import { ClientsSection, FaqSection } from '../components/emboss/EmbossSections';
import { office1, office2, accounting, taxation, business } from '../data/images';
import taxUpdates from '../data/taxUpdates';
import './Home.css';

export default function Home() {

  const practiceAreas = [
    {
      num: '01',
      title: 'Accounting',
      image: accounting,
      alt: 'Professional accountant reviewing financial reports and ledger documents at a desk',
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
      alt: 'Tax professional reviewing Australian tax compliance and statutory documentation',
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
      alt: 'Professional business advisor consulting with a business owner on commercial strategy',
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

  const whyPoints = [
    {
      badge: '01',
      title: 'Qualified and local',
      desc: 'Led by Mandar Gokhale, a Chartered Accountant, in Norwest Business Park.',
      image: office1,
    },
    {
      badge: '02',
      title: 'One team for accounts and tax',
      desc: 'Your accounting, tax returns, BAS and company matters handled in one place.',
      image: accounting,
    },
    {
      badge: '03',
      title: 'Clear communication',
      desc: 'Plain language, no jargon.',
      image: office2,
    },
    {
      badge: '04',
      title: 'Compliance first',
      desc: 'Lodgements and deadlines kept in order so nothing is missed.',
      image: business,
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
          4. WHO WE WORK WITH (Embossed look)
          ==================================================================== */}
      <ClientsSection />

      {/* ====================================================================
          5. WHY M&S (Horizontal Expanding Panels with LightBeams background)
          ==================================================================== */}
      <section className="ms-home-why-section" data-theme="dark">
        <LightBeams
          color="#bdd3e8"
          background="radial-gradient(1100px 650px at 50% 15%, #0e1e47 0%, #060b18 70%)"
          speed={14}
          intensity={0.55}
          angle={-20}
        >
          <div className="ms-home-why-inner">
            <div className="ms-home-container">
              <Reveal>
                <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
                  <h2 className="ms-home-heading" style={{ marginBottom: 0 }}>
                    A personal approach backed by technical expertise
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ExpandingPanels items={whyPoints} height={420} borderRadius={22} expandRatio={4.8} />
              </Reveal>
            </div>
          </div>
        </LightBeams>
      </section>

      {/* ====================================================================
          6. HOW WE WORK (3 Steps with Connecting Line)
          ==================================================================== */}
      <section className="ms-home-section ms-home-section--light" data-theme="light">
        <div className="ms-home-container">
          <Reveal>
            <div className="ms-home-process-header">
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
          8. TAX UPDATE TEASER (PhotonGrid animated perspective background)
          ==================================================================== */}
      <section className="ms-home-tax-section" data-theme="dark">
        <PhotonGrid
          colors={["#020617", "#22d3ee", "#e879f9"]}
          intensity={0.9}
          tilt={1.1}
          parallax={1.2}
          speed={0.6}
          density={1.4}
          minHeight={600}
        >
          <div className="ms-home-tax-inner">
            <div className="ms-home-container">
              <Reveal>
                <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
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
                    <FlipCard
                      minHeight={480}
                      borderRadius={22}
                      frontLabel="Read more"
                      backLabel="Back to summary"
                      frontBackground="#ffffff"
                      backBackground="linear-gradient(155deg, #0e173b 0%, #060b1e 100%)"
                      frontColor="#2f3fff"
                      backColor="#8ba1ff"
                      front={
                        <>
                          {item.image && (
                            <div className="ms-home-teaser-media">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="ms-home-teaser-img"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="ms-home-teaser-content">
                            <span className="ms-home-teaser-date">{item.date}</span>
                            <h3 className="ms-home-teaser-title">{item.title}</h3>
                            <p className="ms-home-teaser-summary">{item.summary}</p>
                          </div>
                        </>
                      }
                      back={
                        <>
                          <span className="ms-home-teaser-date ms-home-teaser-date--back">
                            {item.date}
                          </span>
                          <h3 className="ms-home-teaser-title ms-home-teaser-title--back">
                            {item.title}
                          </h3>
                          <div className="ms-home-teaser-body-text">
                            {item.body && item.body.length > 0 ? (
                              item.body.map((para, pIdx) => (
                                <p key={pIdx} className="ms-home-teaser-para">
                                  {para}
                                </p>
                              ))
                            ) : (
                              <p className="ms-home-teaser-para">{item.summary}</p>
                            )}
                          </div>
                        </>
                      }
                    />
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
          </div>
        </PhotonGrid>
      </section>

      {/* ====================================================================
          9. FAQ (Embossed look)
          ==================================================================== */}
      <FaqSection />

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
