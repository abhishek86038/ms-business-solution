"use client";
import React, { useState } from "react";
import styles from "./ExpandingPanels.module.css";

const EMPTY = [];

export default function ExpandingPanels({
  items = EMPTY,
  activeIndex,
  defaultActiveIndex = 0,
  onActiveChange,
  onSelect,
  height = 420,
  gap = 12,
  borderRadius = 22,
  expandRatio = 4.8,
  className = "",
  style,
  label = "Why M&S Business Solutions",
}) {
  const [internal, setInternal] = useState(defaultActiveIndex);
  const entries = Array.isArray(items) ? items : EMPTY;
  const active = Math.max(
    0,
    Math.min(entries.length - 1, activeIndex ?? internal)
  );

  const activate = (index) => {
    if (activeIndex === undefined) setInternal(index);
    if (index !== active) onActiveChange?.(index);
  };

  if (!entries.length) return null;

  return (
    <div
      className={`${styles.root} ${className}`}
      role="group"
      aria-label={label}
      style={{
        height,
        gap,
        "--panel-radius": `${borderRadius}px`,
        "--panel-ratio": Math.max(1, expandRatio),
        ...style,
      }}
    >
      {entries.map((item, index) => {
        const isActive = index === active;
        const numberDisplay = item.number || item.badge || String(index + 1).padStart(2, "0");
        const descriptionDisplay = item.description || item.desc || "";

        return (
          <button
            key={item.id ?? index}
            type="button"
            className={styles.panel}
            data-active={isActive}
            aria-expanded={isActive}
            onPointerEnter={(e) => {
              if (e.pointerType !== "touch") activate(index);
            }}
            onFocus={() => activate(index)}
            onClick={() => {
              activate(index);
              onSelect?.(item, index);
            }}
            onKeyDown={(event) => {
              const delta =
                event.key === "ArrowRight" || event.key === "ArrowDown"
                  ? 1
                  : event.key === "ArrowLeft" || event.key === "ArrowUp"
                  ? -1
                  : 0;
              if (!delta && event.key !== "Home" && event.key !== "End") return;
              event.preventDefault();
              const next =
                event.key === "Home"
                  ? 0
                  : event.key === "End"
                  ? entries.length - 1
                  : (index + delta + entries.length) % entries.length;
              event.currentTarget.parentElement?.children[next]?.focus();
            }}
            style={{
              background: item.background || "#121b42",
            }}
          >
            {item.image && (
              <span
                className={styles.image}
                style={{ backgroundImage: `url(${item.image})` }}
                aria-hidden="true"
              />
            )}
            <span className={styles.shade} aria-hidden="true" />
            <span className={styles.number} aria-hidden="true">
              {numberDisplay}
            </span>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.description} aria-hidden={!isActive}>
              {descriptionDisplay}
            </span>
          </button>
        );
      })}
    </div>
  );
}
