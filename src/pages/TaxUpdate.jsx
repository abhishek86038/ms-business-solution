import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ContactBand from '../components/ContactBand';
import taxUpdates from '../data/taxUpdates';
import './TaxUpdate.css';

export default function TaxUpdate() {
  const [expandedIds, setExpandedIds] = useState(new Set());

  useEffect(() => {
    document.title = 'Tax Update | M&S Business Solutions';
  }, []);

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="ms-tax-scope">
      {/* 1. Page Header with professional taxation insights background */}
      <PageHeader
        kicker="Taxation Insights"
        title="Tax Update"
        subtitle="Key tax and compliance news for Australian businesses and individuals."
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85"
      />

      {/* 2. Main Articles Section */}
      <section className="ms-tax-section" data-theme="light">
        <div className="ms-tax-container">
          <div className="ms-tax-grid">
            {taxUpdates.map((item, idx) => {
              const isExpanded = expandedIds.has(item.id);
              return (
                <Reveal key={item.id} delay={(idx % 2) * 120} style={{ height: '100%' }}>
                  <article className="ms-tax-card">
                    <div className="ms-tax-card-header">
                      <span className="ms-tax-card-date">{item.date}</span>
                    </div>

                    <h2 className="ms-tax-card-title">{item.title}</h2>
                    <p className="ms-tax-card-summary">{item.summary}</p>

                    {/* Inline Expandable Body */}
                    <div className={`ms-tax-expand-wrapper ${isExpanded ? 'is-open' : ''}`}>
                      <div className="ms-tax-expand-inner">
                        <div className="ms-tax-card-body">
                          {item.body.map((para, pIdx) => (
                            <p key={pIdx} className="ms-tax-paragraph">
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expand / Collapse Button */}
                    <button
                      type="button"
                      className="ms-tax-toggle-btn"
                      onClick={() => toggleExpand(item.id)}
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Collapse' : 'Read more about'} ${item.title}`}
                    >
                      <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                      <span className="ms-tax-toggle-arrow" aria-hidden="true">
                        &rarr;
                      </span>
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* General Advice Disclaimer */}
          <Reveal delay={100}>
            <div className="ms-tax-disclaimer">
              <p>
                This information is general in nature and is not tax advice. Please speak with us about your circumstances.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Contact Band */}
      <ContactBand />
    </div>
  );
}
