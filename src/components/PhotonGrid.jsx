"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import styles from "./PhotonGrid.module.css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduced(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

const PhotonGridMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorBackground: new THREE.Color("#020617"),
    uColorGrid: new THREE.Color("#22d3ee"),
    uColorAccent: new THREE.Color("#e879f9"),
    uMouse: new THREE.Vector2(0, 0),
    uIntensity: 0.9,
    uSpeed: 0.6,
    uDensity: 1.4,
  },
  `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  `
  varying vec2 vUv;

  uniform float uTime;
  uniform vec3 uColorBackground;
  uniform vec3 uColorGrid;
  uniform vec3 uColorAccent;
  uniform vec2 uMouse;
  uniform float uIntensity;
  uniform float uSpeed;
  uniform float uDensity;

  float gridLine(float coord, float thickness) {
    float line = abs(fract(coord) - 0.5);
    return smoothstep(thickness, 0.0, line);
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;

    float t = uTime * (0.7 + uSpeed * 0.8);

    float tilt = 0.35;
    uv.y += uv.x * tilt;

    vec2 mouseOffset = uMouse * 0.55;
    uv += mouseOffset * 0.4;

    float depth = 1.5 + uv.y * 1.8;
    depth = clamp(depth, 0.4, 2.0);

    vec2 gridUv = uv * vec2(uDensity * 8.0, uDensity * 4.0) / depth;
    gridUv.y += t * (0.6 + uIntensity * 0.4);

    float lineX = gridLine(gridUv.x, 0.1);
    float lineY = gridLine(gridUv.y, 0.08);
    float gridMask = max(lineX, lineY);

    float pulse = sin(gridUv.y * 1.2 + t * 2.5) * 0.5 + 0.5;
    float diagonal = sin((gridUv.x + gridUv.y) * 0.6 + t * 1.8) * 0.5 + 0.5;

    float glow = gridMask * (0.6 + 0.7 * pulse);
    glow += gridMask * diagonal * 0.4;

    float vignette = smoothstep(1.6, 0.3, length(uv * vec2(1.0, 1.4)));

    vec3 base = uColorBackground;
    vec3 gridColor = mix(uColorGrid, uColorAccent, diagonal * 0.65);

    float intensity = clamp(uIntensity, 0.2, 1.6);
    vec3 color = base;
    color += gridColor * glow * intensity * 1.3;
    color = mix(base, color, vignette);

    float horizonGlow = smoothstep(-0.3, 0.4, uv.y) * 0.6;
    color += uColorAccent * horizonGlow * 0.35 * intensity;

    gl_FragColor = vec4(color, 1.0);
  }
`,
);

extend({ PhotonGridMaterial });

function PhotonGridField({
  mouseRef,
  prefersReducedMotion,
  colors,
  intensity,
  speed,
  density,
}) {
  const materialRef = useRef();
  const meshRef = useRef();
  const { viewport } = useThree();

  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.scale.set(viewport.width, viewport.height, 1);
  }, [viewport.width, viewport.height]);

  useEffect(() => {
    if (!materialRef.current || !Array.isArray(colors)) return;
    const [background, grid, accent] = colors;
    materialRef.current.uColorBackground.set(
      new THREE.Color(background || "#020617"),
    );
    materialRef.current.uColorGrid.set(
      new THREE.Color(grid || background || "#22d3ee"),
    );
    materialRef.current.uColorAccent.set(
      new THREE.Color(accent || grid || "#e879f9"),
    );
  }, [colors]);

  useFrame((state) => {
    if (!materialRef.current) return;
    const t = state.clock.getElapsedTime();
    materialRef.current.uTime = t;
    materialRef.current.uMouse.copy(mouseRef.current);

    const baseIntensity = Number.isFinite(intensity) ? intensity : 0.9;
    const effectiveIntensity = prefersReducedMotion
      ? baseIntensity * 0.55
      : baseIntensity;

    const baseSpeed = Number.isFinite(speed) ? speed : 0.6;
    const baseDensity = Number.isFinite(density) ? density : 1.4;

    materialRef.current.uIntensity = effectiveIntensity;
    materialRef.current.uSpeed = baseSpeed;
    materialRef.current.uDensity = baseDensity;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <photonGridMaterial ref={materialRef} />
    </mesh>
  );
}

export default function PhotonGrid({
  text = "",
  accentText = "",
  children,
  className,
  colors = ["#020617", "#22d3ee", "#e879f9"],
  intensity = 0.9,
  tilt = 1.1,
  parallax = 1.2,
  speed = 0.6,
  density = 1.4,
  minHeight = 320,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const gridMouseRef = useRef(new THREE.Vector2(0, 0));
  const [isActive, setIsActive] = useState(false);
  const [vars, setVars] = useState({});

  const handlePointerMove = useCallback(
    (event) => {
      const container = rootRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      const baseTilt = Number.isFinite(tilt) ? tilt : 1;
      const baseParallax = Number.isFinite(parallax) ? parallax : 1;

      const strengthTilt = prefersReducedMotion ? baseTilt * 0.6 : baseTilt;
      const strengthParallax = prefersReducedMotion
        ? baseParallax * 0.6
        : baseParallax;

      const rotateX = ny * -24 * strengthTilt;
      const rotateY = nx * 26 * strengthTilt;
      const glowX = nx * 38 * strengthParallax;
      const glowY = ny * 34 * strengthParallax;

      setVars({
        "--pgh-rotate-x": `${rotateX}deg`,
        "--pgh-rotate-y": `${rotateY}deg`,
        "--pgh-glow-x": `${glowX}px`,
        "--pgh-glow-y": `${glowY}px`,
      });

      gridMouseRef.current.set(
        nx * 1.3 * strengthParallax,
        ny * 1.3 * strengthParallax,
      );
      setIsActive(true);
    },
    [tilt, parallax, prefersReducedMotion],
  );

  const handlePointerLeave = useCallback(() => {
    setIsActive(false);
    setVars({});
    gridMouseRef.current.set(0, 0);
  }, []);

  const handlePointerDown = () => {
    setIsActive(true);
  };

  const handlePointerUp = () => {
    setIsActive(false);
  };

  const rootStyle = {
    "--pgh-min-height":
      typeof minHeight === "number" ? `${minHeight}px` : minHeight,
  };

  const ariaLabel = text ? `${text} photon grid` : "Photon grid background";

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${className || ""}`}
      style={rootStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      data-active={isActive ? "true" : "false"}
      aria-label={ariaLabel}
    >
      {!prefersReducedMotion && (
        <div className={styles.canvas} aria-hidden="true">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <PhotonGridField
              mouseRef={gridMouseRef}
              prefersReducedMotion={prefersReducedMotion}
              colors={colors}
              intensity={intensity}
              speed={speed}
              density={density}
            />
          </Canvas>
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.glow} style={vars} />
        {(text || accentText) ? (
          <div className={styles.text} style={vars}>
            {text ? <h2 className={styles.title}>{text}</h2> : null}
            {accentText ? <p className={styles.subtitle}>{accentText}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
