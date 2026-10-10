import React from 'react';

export default function PageHeader({ title, subtitle, kicker, bgImage }) {
  const hasBg = Boolean(bgImage);

  return (
    <section 
      data-theme={hasBg ? "dark" : "light"}
      style={{ 
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 4.25rem)', 
        paddingBottom: '4.25rem', 
        background: hasBg 
          ? `linear-gradient(135deg, rgba(6, 10, 26, 0.88) 0%, rgba(10, 16, 45, 0.84) 60%, rgba(5, 8, 20, 0.92) 100%), url(${bgImage}) center/cover no-repeat`
          : 'var(--bg-alt)', 
        borderBottom: hasBg ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid var(--border)',
        overflow: 'hidden',
        color: hasBg ? '#ffffff' : 'inherit'
      }}
    >
      {/* Subtle ambient lighting accent */}
      {hasBg && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            width: '600px',
            height: '100%',
            background: 'radial-gradient(circle, rgba(47, 63, 255, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
      )}

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px' }}>
        {kicker && (
          <p style={{ 
            fontSize: '0.875rem', 
            fontWeight: 700, 
            letterSpacing: '0.08em', 
            textTransform: 'uppercase', 
            color: hasBg ? '#6fc8ff' : 'var(--blue)', 
            marginBottom: '0.75rem' 
          }}>
            {kicker}
          </p>
        )}
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 3.5vw, 3.75rem)', 
          lineHeight: 1.15, 
          marginBottom: subtitle ? '1.25rem' : 0,
          color: hasBg ? '#ffffff' : 'var(--blue)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textShadow: hasBg ? '0 2px 14px rgba(0, 0, 0, 0.45)' : 'none'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ 
            fontSize: 'clamp(1.125rem, 1.25vw, 1.35rem)', 
            lineHeight: 1.6, 
            color: hasBg ? 'rgba(255, 255, 255, 0.88)' : 'var(--text-muted)', 
            maxWidth: '720px', 
            marginBottom: 0,
            textShadow: hasBg ? '0 1px 8px rgba(0, 0, 0, 0.35)' : 'none'
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
