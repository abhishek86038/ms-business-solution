import React from 'react';
import { office2 } from '../data/images';
import JellyButton from './JellyButton';
import Reveal from './Reveal';

export default function ContactBand() {
  return (
    <section 
      className="ms-contact-band"
      style={{
        position: 'relative',
        width: '100%',
        padding: '100px 24px',
        background: `linear-gradient(rgba(5,8,26,.88), rgba(10,16,80,.78)), url(${office2}) center/cover no-repeat`,
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Reveal>
          <h2 
            style={{
              fontSize: 'clamp(2.1rem, 3.4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}
          >
            Ready to discuss your business?
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '680px',
              margin: '0 auto 2.5rem'
            }}
          >
            Schedule an introductory consultation with our experienced team in Norwest Business Park.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div style={{ display: 'inline-flex', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <JellyButton to="/contact">Book a Consultation</JellyButton>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div style={{ marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.72)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 6px' }}>
              Or call{' '}
              <a 
                href="tel:+61288147905" 
                style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                02 8814 7905
              </a>
              {' '}or{' '}
              <a 
                href="tel:+61288243712" 
                style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                02 8824 3712
              </a>
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.55)' }}>
              Serving Bella Vista, Norwest, Baulkham Hills, Castle Hill and surrounding areas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
