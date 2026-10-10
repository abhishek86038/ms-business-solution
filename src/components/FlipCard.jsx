"use client";
import React, { useState } from "react";
import styles from "./FlipCard.module.css";

export default function FlipCard({
  front,
  back,
  flipped,
  defaultFlipped = false,
  onFlip,
  frontBackground = "#ffffff",
  backBackground = "linear-gradient(155deg, #0e173b 0%, #060b1e 100%)",
  frontColor = "#2f3fff",
  backColor = "#8ba1ff",
  frontLabel = "Read more",
  backLabel = "Back to summary",
  minHeight = 300,
  borderRadius = 22,
  className = "",
  style,
}) {
  const [internal, setInternal] = useState(defaultFlipped);
  const active = flipped ?? internal;

  const flip = (e) => {
    e?.stopPropagation?.();
    const next = !active;
    if (flipped === undefined) setInternal(next);
    onFlip?.(next);
  };

  return (
    <div
      className={`${styles.root} ${className}`}
      style={{ minHeight, "--flip-radius": `${borderRadius}px`, ...style }}
      data-flipped={active}
    >
      <div className={styles.rotator}>
        <div
          className={`${styles.face} ${styles.front}`}
          style={{ background: frontBackground, color: frontColor }}
          inert={active ? "" : undefined}
          aria-hidden={active}
          onClick={(e) => {
            if (e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
              flip(e);
            }
          }}
        >
          {front}
        </div>
        <div
          className={`${styles.face} ${styles.back}`}
          style={{ background: backBackground, color: backColor }}
          inert={!active ? "" : undefined}
          aria-hidden={!active}
        >
          {back}
        </div>
      </div>
      <button
        type="button"
        className={styles.toggle}
        onClick={flip}
        aria-pressed={active}
        aria-label={active ? backLabel : frontLabel}
        style={{ color: active ? backColor : frontColor }}
      >
        <span>{active ? backLabel : frontLabel}</span>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M19 8a8 8 0 1 0 1 7M19 3v5h-5" />
        </svg>
      </button>
    </div>
  );
}
