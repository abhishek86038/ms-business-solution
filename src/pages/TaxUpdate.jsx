import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ContactBand from '../components/ContactBand';
import FlipCard from '../components/FlipCard';
import taxUpdates from '../data/taxUpdates';
import './TaxUpdate.css';

export default function TaxUpdate() {
  useEffect(() => {
    document.title = 'Tax Update | M&S Business Solutions';
  }, []);

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
            {taxUpdates.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 2) * 120} style={{ height: '100%' }}>
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
                        <div className="ms-tax-card-media">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="ms-tax-card-img"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="ms-tax-card-content">
                        <div className="ms-tax-card-header">
                          <span className="ms-tax-card-date">{item.date}</span>
                        </div>
                        <h2 className="ms-tax-card-title">{item.title}</h2>
                        <p className="ms-tax-card-summary">{item.summary}</p>
                      </div>
                    </>
                  }
                  back={
                    <>
                      <div className="ms-tax-card-header">
                        <span className="ms-tax-card-date ms-tax-card-date--back">{item.date}</span>
                      </div>
                      <h2 className="ms-tax-card-title ms-tax-card-title--back">{item.title}</h2>
                      <div className="ms-tax-card-body-text">
                        {item.body.map((para, pIdx) => (
                          <p key={pIdx} className="ms-tax-paragraph ms-tax-paragraph--back">
                            {para}
                          </p>
                        ))}
                      </div>
                    </>
                  }
                />
              </Reveal>
            ))}
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
