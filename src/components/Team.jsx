import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/OurPeople.css';
import mandarPhoto from '../assets/mandar-cutout.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mandar-gokhale-0014837/';

/* LinkedIn button with squash/wobble, spinner, and checkmark particle animation */
function JellyButton({ href, children }) {
  const [state, setState] = useState('idle');
  const [wobble, setWobble] = useState(false);
  const [live, setLive] = useState('');
  const busy = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const handleClick = (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;

    setWobble(false);
    requestAnimationFrame(() => setWobble(true));

    later(() => {
      setState('loading');
      setLive('Opening');
    }, 140);

    later(() => {
      setState('success');
      setLive('Done');
    }, 1200);

    later(() => {
      const w = window.open(href, '_blank', 'noopener,noreferrer');
      if (!w) {
        window.location.href = href;
      }
    }, 1900);

    later(() => {
      setState('idle');
      setWobble(false);
      setLive('');
      busy.current = false;
    }, 3000);
  };

  const dots = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <a
      className={`ms-jelly${wobble ? ' is-wobble' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-state={state}
      aria-busy={state === 'loading' ? 'true' : undefined}
      onClick={handleClick}
    >
      <span className="ms-jelly-label">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
        {children}
      </span>
      <svg className="ms-spin" viewBox="0 0 30 30" aria-hidden="true">
        <circle cx="15" cy="15" r="11" />
      </svg>
      <svg className="ms-check" viewBox="0 0 30 30" aria-hidden="true">
        <path d="M8 15.5l5 5 9-11" />
      </svg>
      <span className="ms-dots" aria-hidden="true">
        {dots.map((a) => (
          <i key={a} style={{ '--a': `${a}deg` }} />
        ))}
      </span>
      <span className="ms-sr" role="status" aria-live="polite">
        {live}
      </span>
    </a>
  );
}

export default function Team() {
  return (
    <section className="msp-section" id="our-people" aria-labelledby="our-people-heading">
      <div className="msp-container">
        <div className="msp-grid">
          
          {/* Left Column: Portrait Presentation */}
          <div className="msp-visual-wrap">
            <div className="msp-portrait-stage">
              <div className="msp-stage-backdrop" aria-hidden="true"></div>
              
              <img
                className="msp-portrait-img"
                src={mandarPhoto}
                alt="Mandar Gokhale, Principal Chartered Accountant"
                width="786"
                height="602"
              />

              <div className="msp-credential-pill">
                <svg className="msp-cred-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Chartered Accountant (CA ANZ)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio and Credentials */}
          <div className="msp-content">
            <div className="msp-eyebrow-wrap">
              <span className="msp-eyebrow-line" aria-hidden="true"></span>
              <p className="msp-eyebrow">OUR PEOPLE</p>
            </div>

            <h1 id="our-people-heading" className="msp-heading">
              Meet Mandar Gokhale
            </h1>

            <div className="msp-role-tag">
              PRINCIPAL CHARTERED ACCOUNTANT
            </div>

            <p className="msp-bio-p1">
              M&amp;S Business Solutions is headed by Mandar Gokhale, a seasoned Chartered Accountant from the Institute of Chartered Accountants in Australia, with over a decade of experience in accounting and business.
            </p>

            <p className="msp-bio-p2">
              Mandar specializes in preparation of Annual Financial Statements, Business & Individual Tax Returns and other statutory returns as well as complete Financial Accounting for Partnerships, Companies, Sole Traders, SMSF and Trusts.
            </p>

            {/* 4 Professional Credential Blocks */}
            <div className="msp-cards-grid">
              <div className="msp-info-card">
                <span className="msp-card-val">10+ Years</span>
                <span className="msp-card-lbl">Accounting &amp; Business Experience</span>
              </div>

              <div className="msp-info-card">
                <span className="msp-card-val">Chartered Accountant</span>
                <span className="msp-card-lbl">Professional Expertise</span>
              </div>

              <div className="msp-info-card">
                <span className="msp-card-val">Accounting</span>
                <span className="msp-card-lbl">Core Expertise</span>
              </div>

              <div className="msp-info-card">
                <span className="msp-card-val">Taxation</span>
                <span className="msp-card-lbl">Core Expertise</span>
              </div>
            </div>

            {/* Actions Row */}
            <div className="msp-actions">
              <a className="msp-phone-btn" href="tel:+61288147905">
                <svg className="msp-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                02 8814 7905
              </a>

              <JellyButton href={LINKEDIN_URL}>
                View LinkedIn Profile
              </JellyButton>

              <Link className="msp-consult-link" to="/contact">
                Book a Consultation &rarr;
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export { Team };
