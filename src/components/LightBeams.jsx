"use client";
import React from "react";
import styles from "./LightBeams.module.css";

export default function LightBeams({
  color = "#bdd3e8",
  background = "#101820",
  speed = 14,
  intensity = 0.65,
  angle = -20,
  minHeight = 400,
  children,
  className = "",
  style,
}) {
  return (
    <div
      className={`${styles.root} ${className}`}
      style={{
        background,
        minHeight,
        "--beam": color,
        "--speed": `${Math.max(1, speed)}s`,
        "--angle": `${angle}deg`,
        "--intensity": Math.min(1, Math.max(0, intensity)),
        ...style,
      }}
    >
      <div className={styles.beams} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            style={{
              left: `${12 + i * 19}%`,
              animationDelay: `${-i * 2.1}s`,
              width: `${8 + (i % 3) * 5}%`,
            }}
          />
        ))}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
