import React from 'react';

export default function PageHeader({ title, subtitle, kicker }) {
  return (
    <section 
      style={{ 
        paddingTop: 'calc(var(--nav-height) + 3.5rem)', 
        paddingBottom: '3.5rem', 
        background: 'var(--bg-alt)', 
        borderBottom: '1px solid var(--border)' 
      }}
    >
      <div className="container" style={{ maxWidth: '1440px' }}>
        {kicker && (
          <p style={{ 
            fontSize: '0.875rem', 
            fontWeight: 600, 
            letterSpacing: '0.08em', 
            textTransform: 'uppercase', 
            color: 'var(--blue)', 
            marginBottom: '0.75rem' 
          }}>
            {kicker}
          </p>
        )}
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 3.5vw, 3.75rem)', 
          lineHeight: 1.15, 
          marginBottom: subtitle ? '1.25rem' : 0,
          color: 'var(--blue)'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ 
            fontSize: 'clamp(1.125rem, 1.25vw, 1.35rem)', 
            lineHeight: 1.6, 
            color: 'var(--text-muted)', 
            maxWidth: '680px', 
            marginBottom: 0 
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
