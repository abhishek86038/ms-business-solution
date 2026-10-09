import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * AccountingOrb3D
 * Premium 3D "Accounting Intelligence Orb" for M&S Business Solutions:
 * - Sculptural financial object fused from polished dark bronze, warm amber glass, and brushed gold
 * - Fine concentric ledger lines and fiscal register rings
 * - Embossed financial document plaque with a prominent 3D compliance checkmark (accurate accounts & tax compliance)
 * - Soft internal amber illumination, rich shadows, specular reflections, and cinematic depth
 * - Interactive pointer tilt & reactive listening/thinking states
 */
export default function AccountingOrb3D({ isListening = false, isThinking = false }) {
  const mountRef = useRef(null);
  const stateRef = useRef({ isListening, isThinking });

  useEffect(() => {
    stateRef.current = { isListening, isThinking };
  }, [isListening, isThinking]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 160;
    const height = container.clientHeight || 160;

    // ------------------------------------------------------------------------
    // 1. SCENE, CAMERA, RENDERER
    // ------------------------------------------------------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.3);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn('WebGL initialization failed, falling back', e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Root Group
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // ------------------------------------------------------------------------
    // 2. PROCEDURAL HIGH-RES AMBER GLASS TEXTURE
    // ------------------------------------------------------------------------
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 1024;
    texCanvas.height = 512;
    const ctx = texCanvas.getContext('2d');

    // Rich warm amber gradient matching reference video
    const grad = ctx.createLinearGradient(0, 0, 1024, 512);
    grad.addColorStop(0, '#ffa438');
    grad.addColorStop(0.35, '#d95408');
    grad.addColorStop(0.7, '#661f03');
    grad.addColorStop(1, '#240801');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    // Fine Ledger Horizontal Rule Lines
    ctx.strokeStyle = 'rgba(255, 230, 180, 0.22)';
    ctx.lineWidth = 1.8;
    for (let y = 20; y < 512; y += 24) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Ledger Columns
    ctx.strokeStyle = 'rgba(255, 200, 140, 0.16)';
    ctx.lineWidth = 1.4;
    [128, 256, 384, 512, 640, 768, 896].forEach(x => {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    });

    const amberTexture = new THREE.CanvasTexture(texCanvas);
    amberTexture.wrapS = THREE.RepeatWrapping;

    // ------------------------------------------------------------------------
    // 3. MASTER MATERIALS
    // ------------------------------------------------------------------------
    // Translucent Warm Amber Glass
    const amberGlassMat = new THREE.MeshPhysicalMaterial({
      map: amberTexture,
      color: new THREE.Color('#ff8528'),
      roughness: 0.18,
      metalness: 0.12,
      clearcoat: 0.6,
      clearcoatRoughness: 0.18,
      emissive: new THREE.Color('#661a00'),
      emissiveIntensity: 0.38
    });

    // Polished Dark Bronze
    const darkBronzeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2b170c'),
      roughness: 0.26,
      metalness: 0.88,
      emissive: new THREE.Color('#1a0c05'),
      emissiveIntensity: 0.15
    });

    // Polished Warm Gold
    const polishedGoldMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f5be58'),
      roughness: 0.16,
      metalness: 0.94,
      emissive: new THREE.Color('#5c3606'),
      emissiveIntensity: 0.3
    });

    // Document Inlay Dark Bronze Material
    const docInlayMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1c0d05'),
      roughness: 0.35,
      metalness: 0.72
    });

    // ------------------------------------------------------------------------
    // 4. CORE AMBER SPHERE & INTERNAL LUMINESCENCE
    // ------------------------------------------------------------------------
    const coreGeo = new THREE.SphereGeometry(1.20, 64, 64);
    const coreMesh = new THREE.Mesh(coreGeo, amberGlassMat);
    orbGroup.add(coreMesh);

    // Inner glowing core
    const innerGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ff9c38'),
      transparent: true,
      opacity: 0.6
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    orbGroup.add(innerMesh);

    // ------------------------------------------------------------------------
    // 5. METALLIC ARMATURE RINGS (Fine parallel balance register rules)
    // ------------------------------------------------------------------------
    // Equatorial Bronze Bezel
    const eqBezelGeo = new THREE.TorusGeometry(1.24, 0.038, 24, 100);
    const eqBezel = new THREE.Mesh(eqBezelGeo, darkBronzeMat);
    eqBezel.rotation.x = Math.PI / 2;
    orbGroup.add(eqBezel);

    // Inlaid Gold Register Track
    const goldTrackGeo = new THREE.TorusGeometry(1.248, 0.012, 16, 100);
    const goldTrack = new THREE.Mesh(goldTrackGeo, polishedGoldMat);
    goldTrack.rotation.x = Math.PI / 2;
    orbGroup.add(goldTrack);

    // Upper Ledger Ring (Debit Line)
    const upperRingGeo = new THREE.TorusGeometry(1.02, 0.018, 16, 80);
    const upperRing = new THREE.Mesh(upperRingGeo, polishedGoldMat);
    upperRing.position.y = 0.62;
    upperRing.rotation.x = Math.PI / 2;
    orbGroup.add(upperRing);

    // Lower Ledger Ring (Credit Line)
    const lowerRingGeo = new THREE.TorusGeometry(1.02, 0.018, 16, 80);
    const lowerRing = new THREE.Mesh(lowerRingGeo, polishedGoldMat);
    lowerRing.position.y = -0.62;
    lowerRing.rotation.x = Math.PI / 2;
    orbGroup.add(lowerRing);

    // Inclined Meridian Balance Ring (45 degrees)
    const meridianGeo = new THREE.TorusGeometry(1.23, 0.032, 20, 100);
    const meridianRing = new THREE.Mesh(meridianGeo, darkBronzeMat);
    meridianRing.rotation.x = Math.PI / 3.6;
    meridianRing.rotation.y = Math.PI / 5.2;
    orbGroup.add(meridianRing);

    // ------------------------------------------------------------------------
    // 6. PROMINENT 3D EMBOSSED FINANCIAL DOCUMENT TABLET & COMPLIANCE SYMBOL
    // Placed proudly on front face (z = 1.22)
    // ------------------------------------------------------------------------
    const tabletGroup = new THREE.Group();

    // A. Bronze Financial Document Tablet Frame (Rounded rectangular plaque)
    const tabletW = 0.76, tabletH = 0.98, tabletD = 0.055;
    const tabletGeo = new THREE.BoxGeometry(tabletW, tabletH, tabletD);
    const tabletMesh = new THREE.Mesh(tabletGeo, darkBronzeMat);
    tabletGroup.add(tabletMesh);

    // Polished Gold Tablet Bevel Border
    const borderGeo = new THREE.BoxGeometry(tabletW + 0.04, tabletH + 0.04, 0.02);
    const borderMesh = new THREE.Mesh(borderGeo, polishedGoldMat);
    borderMesh.position.z = -0.015;
    tabletGroup.add(borderMesh);

    // B. Inner Document Plate (Contrasting dark bronze)
    const plateGeo = new THREE.BoxGeometry(tabletW - 0.08, tabletH - 0.08, 0.02);
    const plateMesh = new THREE.Mesh(plateGeo, docInlayMat);
    plateMesh.position.z = 0.022;
    tabletGroup.add(plateMesh);

    // C. Gold Financial Document Header Bar
    const headerGeo = new THREE.BoxGeometry(0.54, 0.055, 0.025);
    const headerMesh = new THREE.Mesh(headerGeo, polishedGoldMat);
    headerMesh.position.set(0, 0.32, 0.035);
    tabletGroup.add(headerMesh);

    // D. Micro Ledger Rows (Embossed gold balance lines)
    for (let i = 0; i < 3; i++) {
      const lineGeo = new THREE.BoxGeometry(0.50 - i * 0.07, 0.032, 0.02);
      const lineMesh = new THREE.Mesh(lineGeo, polishedGoldMat);
      lineMesh.position.set(0, 0.20 - i * 0.075, 0.035);
      tabletGroup.add(lineMesh);
    }

    // E. Gold Circular Compliance Seal
    const sealGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.025, 32);
    const sealMesh = new THREE.Mesh(sealGeo, polishedGoldMat);
    sealMesh.rotation.x = Math.PI / 2;
    sealMesh.position.set(0, -0.16, 0.038);
    tabletGroup.add(sealMesh);

    const sealInnerGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.03, 32);
    const sealInner = new THREE.Mesh(sealInnerGeo, darkBronzeMat);
    sealInner.rotation.x = Math.PI / 2;
    sealInner.position.set(0, -0.16, 0.042);
    tabletGroup.add(sealInner);

    // F. Refined Sculpted 3D Gold Compliance Checkmark (Accurate Accounts & Tax Compliance)
    const checkShape = new THREE.Shape();
    checkShape.moveTo(-0.11, -0.02);
    checkShape.lineTo(-0.03, -0.10);
    checkShape.lineTo(0.13, 0.09);
    checkShape.lineTo(0.10, 0.13);
    checkShape.lineTo(-0.03, -0.04);
    checkShape.lineTo(-0.08, 0.01);
    checkShape.closePath();

    const checkGeo = new THREE.ExtrudeGeometry(checkShape, {
      depth: 0.038,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.012,
      bevelSegments: 4
    });
    checkGeo.center();

    const checkMesh = new THREE.Mesh(checkGeo, polishedGoldMat);
    checkMesh.position.set(0, -0.16, 0.078);
    checkMesh.scale.set(1.4, 1.4, 1.4);
    tabletGroup.add(checkMesh);

    // Position tablet proudly on front face (z = 1.20)
    tabletGroup.position.set(0, 0.02, 1.20);
    orbGroup.add(tabletGroup);

    // ------------------------------------------------------------------------
    // 7. CINEMATIC LIGHTING
    // ------------------------------------------------------------------------
    // Warm Key Light (top-left specular highlight)
    const keyLight = new THREE.DirectionalLight('#fff5e3', 2.6);
    keyLight.position.set(-2.4, 3.0, 3.6);
    scene.add(keyLight);

    // Ambient Light (subtle warm amber fill)
    const ambientLight = new THREE.AmbientLight('#ff7a22', 0.5);
    scene.add(ambientLight);

    // Rim Light (back-right bronze rim highlight)
    const rimLight = new THREE.DirectionalLight('#ff8833', 1.8);
    rimLight.position.set(2.8, -1.8, -2.2);
    scene.add(rimLight);

    // Internal Glow Point Light
    const corePointLight = new THREE.PointLight('#ff9933', 2.2, 5.0);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // Soft Front Accent Light
    const frontSpot = new THREE.PointLight('#ffe4a8', 0.8, 4.0);
    frontSpot.position.set(0, 0.3, 2.6);
    scene.add(frontSpot);

    // ------------------------------------------------------------------------
    // 8. INTERACTION & ANIMATION LOOP
    // ------------------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.35;
      mouseY = y * 0.25;
    };

    window.addEventListener('pointermove', handlePointerMove);

    const startTime = performance.now();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) / 1000;
      const { isListening: listening, isThinking: thinking } = stateRef.current;

      const bob = Math.sin(elapsedTime * 1.5) * 0.035;

      if (listening) {
        // Listening: rhythmic breathing & brighter warm core
        const pulse = Math.sin(elapsedTime * 5.0) * 0.05;
        orbGroup.scale.set(1.0 + pulse, 1.0 + pulse, 1.0 + pulse);
        corePointLight.intensity = 3.2 + Math.sin(elapsedTime * 5.0) * 1.0;
      } else if (thinking) {
        // Thinking: higher energy shimmer
        orbGroup.scale.set(1.02, 1.02, 1.02);
        corePointLight.intensity = 2.8 + Math.sin(elapsedTime * 3.0) * 0.6;
      } else {
        // Calm idle state
        orbGroup.scale.set(1.0, 1.0, 1.0);
        corePointLight.intensity = 2.0 + Math.sin(elapsedTime * 1.6) * 0.3;
      }

      // Smooth pointer tracking
      targetRotY += (mouseX - targetRotY) * 0.05;
      targetRotX += (mouseY - targetRotX) * 0.05;

      // Gentle oscillation that keeps the front compliance emblem in clear view
      orbGroup.rotation.y = Math.sin(elapsedTime * 0.32) * 0.14 + targetRotY;
      orbGroup.rotation.x = Math.sin(elapsedTime * 0.24) * 0.07 + targetRotX;
      orbGroup.position.y = bob;

      // Subtle differential rotation of the rings
      eqBezel.rotation.z = elapsedTime * 0.12;
      meridianRing.rotation.z = -elapsedTime * 0.09;

      renderer.render(scene, camera);
    };

    animate();

    // ------------------------------------------------------------------------
    // CLEANUP
    // ------------------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }

      coreGeo.dispose();
      amberGlassMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      eqBezelGeo.dispose();
      goldTrackGeo.dispose();
      upperRingGeo.dispose();
      lowerRingGeo.dispose();
      meridianGeo.dispose();
      darkBronzeMat.dispose();
      polishedGoldMat.dispose();
      docInlayMat.dispose();
      tabletGeo.dispose();
      borderGeo.dispose();
      plateGeo.dispose();
      headerGeo.dispose();
      sealGeo.dispose();
      sealInnerGeo.dispose();
      checkGeo.dispose();
      amberTexture.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="ms-3d-orb-canvas"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 2,
        cursor: 'grab'
      }}
      title="M&S Accounting Intelligence Orb — Accurate Accounts & Tax Compliance"
    />
  );
}
