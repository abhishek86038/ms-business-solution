import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="ms-hero" id="top" data-theme="dark">
      {/* Background visual layers */}
      <div className="ms-grid" aria-hidden="true"></div>
      <div className="ms-glow" aria-hidden="true">
        <i className="b"></i>
        <i className="w"></i>
      </div>

      {/* 1. Heading block above wordmark */}
      <div className="ms-head">
        <h1>Take control of your accounting</h1>
        <p className="sub">Before it controls you</p>
      </div>

      {/* 2. Giant M&S wordmark taking its own space in the document flow */}
      <div className="ms-mark-wrap">
        <p className="ms-mark" aria-hidden="true">
          M&amp;S
        </p>
      </div>

      {/* 3. Bottom copy block */}
      <div className="ms-copy">
        <p className="txt">
          Professional accounting gives you the resources to create sound plans, cut costs, increase profits and make your business grow.
        </p>
        <div className="ms-btns">
          <Link className="ms-btn w" to="/contact">
            Book a Consultation
          </Link>
          <Link className="ms-btn d" to="/services">
            Our Services
          </Link>
        </div>
        <p className="ms-note">
          Accounting and taxation in Baulkham Hills, Sydney
        </p>
      </div>
    </section>
  );
}
