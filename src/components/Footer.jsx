import React from 'react';
import { Link } from 'react-router-dom';
import VectorWordmark from './VectorWordmark';

export default function Footer() {
  return (
    <footer 
      style={{ 
        position: 'relative', 
        background: '#05070B', 
        color: '#fff', 
        padding: '5rem 0 2.5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* 1. Vector Wordmark WebGL Background Treatment */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1, 
          pointerEvents: 'none',
          overflow: 'hidden',
          opacity: 0.9
        }}
        aria-hidden="true"
      >
        <VectorWordmark 
          text="M&S"
          background="#05070B"
          textColor="#FFFFFF"
          shade="rgba(255, 255, 255, 0.16)"
          accent="rgba(111, 200, 255, 0.65)"
          font={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 900,
            fontSize: '320px',
            letterSpacing: '-0.03em',
          }}
          handles={{
            labels: true,
            size: 109,
            spread: 27,
          }}
        />
      </div>

      {/* 2. Soft contrast overlay for clean typography readability */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(ellipse at 50% 50%, rgba(5,7,11,0.45) 0%, rgba(5,7,11,0.82) 100%)', 
          zIndex: 2, 
          pointerEvents: 'none' 
        }} 
        aria-hidden="true"
      />

      {/* 3. Footer Content */}
      <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '1680px' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '4rem', 
            alignItems: 'start', 
            marginBottom: '4rem' 
          }}
        >
          {/* Brand Info */}
          <div>
            <Link to="/">
              <img 
                src="https://www.msbusinesssolutions.com.au/wp-content/uploads/2024/02/MS-Final-Logo-300x112.png" 
                alt="M&S Business Solutions" 
                style={{ height: '36px', filter: 'brightness(0) invert(1)', marginBottom: '1.5rem' }} 
              />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '340px' }}>
              Chartered accounting and taxation advisory based in Norwest Business Park, serving businesses and individuals across Sydney.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1.25rem', fontWeight: 600, letterSpacing: '0.04em' }}>Pages</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>Our Services</Link></li>
              <li><Link to="/services/accounting" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', paddingLeft: '0.75rem' }}>↳ Accounting</Link></li>
              <li><Link to="/services/taxation" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', paddingLeft: '0.75rem' }}>↳ Taxation</Link></li>
              <li><Link to="/our-people" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>Our People</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Office & Contact */}
          <div>
            <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1.25rem', fontWeight: 600, letterSpacing: '0.04em' }}>Norwest Office</h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Suite 306, Building A, 1 Burbank Place<br />
              P. O. Box 7344, Baulkham Hills 2153<br />
              Bella Vista / Norwest Business Park, Sydney
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              Phone: (02) 8814 7905<br />
              Phone: (02) 8824 3712<br />
              Email: info@msbusinesssolutions.com.au
            </p>
          </div>
        </div>

        {/* Bottom Bar with Clickable Powered by Jobgen.Ai */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255,255,255,0.14)', 
            paddingTop: '2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            fontSize: '0.8125rem', 
            color: 'rgba(255,255,255,0.55)' 
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} M&S Business Solutions. All rights reserved.
          </div>
          <div>
            Chartered Accountants &bull; Registered Tax Agents &bull; Sydney, NSW
          </div>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8125rem', letterSpacing: '0.02em' }}>
            Powered by{' '}
            <a 
              href="https://jobgen.ai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontWeight: 600,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Jobgen.Ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
