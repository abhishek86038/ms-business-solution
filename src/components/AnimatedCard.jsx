import React from 'react';
import './AnimatedCard.css';

/**
 * AnimatedCard
 * Wraps content with the Uiverse animated blob effect.
 * Preserves the card's dimensions, typography, layout, buttons, and interactions
 * while adding a continuous blurred blue blob moving through the corners behind
 * a frosted glass background layer.
 */
export default function AnimatedCard({
  children,
  className = '',
  style = {},
  contentStyle = {},
  variant = 'default',
  isLarge = false,
  as: Component = 'div',
  ...rest
}) {
  const isAlt = variant === 'alt';

  return (
    <Component
      className={`ms-animated-card ${className}`}
      style={style}
      {...rest}
    >
      <div
        className={`ms-animated-card-blob ${isLarge ? 'is-large' : ''}`}
        aria-hidden="true"
      />
      <div
        className={`ms-animated-card-bg ${isAlt ? 'is-alt' : ''}`}
        aria-hidden="true"
      />
      <div className="ms-animated-card-content" style={contentStyle}>
        {children}
      </div>
    </Component>
  );
}
