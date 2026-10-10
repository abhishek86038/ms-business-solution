import React, { useEffect, useRef, useState } from 'react';

export default function RoundCarousel({
  children,
  cards,
  cardWidth: customCardWidth,
  cardHeight: customCardHeight,
  spacing = 3,
  speed = 4.5,
  direction = 'right',
  drag = true,
  sensitivity = 4.5,
  tilt = -6,
  perspective = 2400,
  cornerRadius = 22,
  innerDim = 3.5,
  background = 'transparent',
  style = {},
}) {
  // Accept cards as prop or children
  const rawItems = cards || (React.Children.toArray(children));
  const items = rawItems.length > 0 ? rawItems : [];
  const count = items.length;

  // Responsive dimensions for desktop, tablet, and mobile
  const [dimensions, setDimensions] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        w: customCardWidth || 350,
        h: customCardHeight || 540,
        carouselH: 640,
        radiusMin: 360,
      };
    }
    const width = window.innerWidth;
    if (width <= 480) {
      return {
        w: customCardWidth ? Math.min(customCardWidth, 290) : 290,
        h: customCardHeight ? Math.min(customCardHeight, 480) : 480,
        carouselH: 560,
        radiusMin: 220,
      };
    }
    if (width <= 860) {
      return {
        w: customCardWidth ? Math.min(customCardWidth, 320) : 320,
        h: customCardHeight ? Math.min(customCardHeight, 510) : 510,
        carouselH: 600,
        radiusMin: 290,
      };
    }
    return {
      w: customCardWidth || 350,
      h: customCardHeight || 540,
      carouselH: 640,
      radiusMin: 360,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setDimensions({
          w: customCardWidth ? Math.min(customCardWidth, 290) : 290,
          h: customCardHeight ? Math.min(customCardHeight, 480) : 480,
          carouselH: 560,
          radiusMin: 220,
        });
      } else if (width <= 860) {
        setDimensions({
          w: customCardWidth ? Math.min(customCardWidth, 320) : 320,
          h: customCardHeight ? Math.min(customCardHeight, 510) : 510,
          carouselH: 600,
          radiusMin: 290,
        });
      } else {
        setDimensions({
          w: customCardWidth || 350,
          h: customCardHeight || 540,
          carouselH: 640,
          radiusMin: 360,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [customCardWidth, customCardHeight]);

  const ringRef = useRef(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const isHoveredRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({
    active: false,
    startX: 0,
    x: 0,
    pointerId: null,
    hasMoved: false,
  });

  const angle = count > 0 ? 360 / count : 120;
  const factor = 1 + spacing * 0.15;
  const rawRadius = count > 0 ? (dimensions.w * factor) / (2 * Math.tan(Math.PI / count)) : 250;
  // Ensure the 3 cards have proper cinematic depth and comfort radius
  const radius = Math.max(rawRadius, dimensions.radiusMin);
  const degPerSec = speed * 6 * (direction === 'left' ? -1 : 1);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const apply = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`;
    };
    apply();

    const draw = (now) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;

      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else if (!isHoveredRef.current && !prefersReducedMotion) {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, degPerSec, count]);

  const onPointerDown = (e) => {
    if (!drag) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      x: e.clientX,
      pointerId: e.pointerId,
      hasMoved: false,
    };
    velRef.current = 0;
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;

    if (Math.abs(e.clientX - d.startX) > 4) {
      d.hasMoved = true;
      try {
        if (!e.currentTarget.hasPointerCapture?.(d.pointerId)) {
          e.currentTarget.setPointerCapture?.(d.pointerId);
        }
      } catch (err) {}
    }

    d.x = e.clientX;
    const k = 0.3 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };

  const onPointerUp = (e) => {
    const d = dragRef.current;
    if (d.active) {
      try {
        e.currentTarget.releasePointerCapture?.(e.pointerId);
      } catch (err) {}
    }
    d.active = false;
    setIsDragging(false);
  };

  const handleClickCapture = (e) => {
    // If user dragged to rotate the carousel, don't trigger the card link
    if (dragRef.current.hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: `${dimensions.carouselH}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background,
        perspective: `${perspective}px`,
        cursor: drag ? (isDragging ? 'grabbing' : 'grab') : 'default',
        touchAction: 'none',
        userSelect: isDragging ? 'none' : 'auto',
        position: 'relative',
        ...style,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClickCapture={handleClickCapture}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      aria-label="Interactive 3D Practice Areas Carousel"
      role="region"
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt}deg)`,
          width: `${dimensions.w}px`,
          height: `${dimensions.h}px`,
          position: 'relative',
        }}
      >
        <div
          ref={ringRef}
          style={{
            position: 'relative',
            width: `${dimensions.w}px`,
            height: `${dimensions.h}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((cardContent, i) => {
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                  borderRadius: `${cornerRadius}px`,
                }}
              >
                {/* Front Face: The real interactive card content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: `${cornerRadius}px`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 14px 34px rgba(0, 0, 0, 0.28)',
                  }}
                >
                  {cardContent}
                </div>

                {/* Back Face: Sleek corporate reverse side with innerDim shading */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: `${cornerRadius}px`,
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: 'linear-gradient(145deg, #0d163a 0%, #060a17 100%)',
                    border: '1.5px solid rgba(47, 63, 255, 0.35)',
                    boxShadow: '0 14px 34px rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px 24px',
                    textAlign: 'center',
                    color: '#ffffff',
                    filter: `brightness(${innerDim / 10})`,
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'rgba(47, 63, 255, 0.16)',
                      border: '1px solid rgba(47, 63, 255, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      color: '#9fb0ff',
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#9fb0ff',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    M&amp;S Business Solutions
                  </span>
                  <span
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                    }}
                  >
                    Chartered Accounting Practice
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
