import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Hero.css';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navRef = useRef(null);

  // Initialize immediately based on route to avoid any initial flash
  const [navTheme, setNavTheme] = useState(() => (isHome ? 'dark' : 'light'));

  useEffect(() => {
    let rafId = null;

    const determineTheme = () => {
      if (!navRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const checkY = navRect.top + navRect.height / 2;
      const checkX = Math.min(Math.max(navRect.left + navRect.width / 2, 40), window.innerWidth - 40);

      let detectedTheme = null;

      // 1. Point-sampling: elements directly behind the navbar at its center
      try {
        const elements = document.elementsFromPoint(checkX, checkY) || [];
        const behindEl = elements.find(
          (el) =>
            !navRef.current.contains(el) &&
            el !== navRef.current &&
            el !== document.body &&
            el !== document.documentElement
        );

        if (behindEl) {
          const themed = behindEl.closest('[data-theme]');
          if (themed) {
            const attr = themed.getAttribute('data-theme');
            if (attr === 'dark' || attr === 'light') {
              detectedTheme = attr;
            }
          }
        }
      } catch (e) {
        // Fall through to geometry check
      }

      // 2. Geometry check: find which section/footer encloses the navbar's vertical position
      if (!detectedTheme) {
        const candidates = document.querySelectorAll(
          '[data-theme], .ms-hero, footer, section, header, main'
        );

        for (const el of candidates) {
          const r = el.getBoundingClientRect();
          if (r.top <= checkY && r.bottom > checkY) {
            const attr = el.getAttribute('data-theme');
            if (attr === 'dark' || attr === 'light') {
              detectedTheme = attr;
              break;
            }
            if (
              el.tagName === 'FOOTER' ||
              el.classList.contains('ms-hero') ||
              el.classList.contains('ms-pf-cta')
            ) {
              detectedTheme = 'dark';
              break;
            }
            if (
              el.classList.contains('section') ||
              el.classList.contains('ms-pf-sec') ||
              el.classList.contains('ms-people')
            ) {
              detectedTheme = 'light';
              break;
            }
          }
        }
      }

      // 3. Fallback: on Home page Hero area (scrollY < 400), it's dark
      if (!detectedTheme) {
        if (location.pathname === '/' && window.scrollY < 400) {
          detectedTheme = 'dark';
        } else {
          detectedTheme = 'light';
        }
      }

      setNavTheme((prev) => (prev !== detectedTheme ? detectedTheme : prev));
    };

    const handleScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        determineTheme();
      });
    };

    // Run on initial mount and route transition
    determineTheme();
    const timer = setTimeout(determineTheme, 50);

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className={`ms-nav ${navTheme === 'light' ? 'navbar-light' : 'navbar-dark'}`}
      aria-label="Main"
    >
      <Link className="ms-logo" to="/" aria-label="M&S Business Solutions home">
        M&S
      </Link>
      <ul className="ms-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <a className="ms-tel" href="tel:+61288147905" aria-label="Call 02 8814 7905">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
        </svg>
      </a>
    </nav>
  );
}
