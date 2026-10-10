/*
 * Chladni plate particle background (original code for M&S Business Solutions).
 *
 * Idea: sand on a vibrating plate jumps around randomly, but jumps less where the plate is
 * still (the "nodal lines"). So the grains slowly collect on those lines and draw the pattern.
 * Every few seconds the plate switches to a new vibration mode and the grains re-settle.
 *
 * createChladni(canvas, host, options) -> { destroy() }
 *   canvas : the <canvas> to draw on (should fill `host`)
 *   host   : the parent element. Used for size, visibility and pointer events.
 */

const MODES = [
  [1, 2, 1], [1, 3, -1], [2, 3, 1], [1, 4, -1], [3, 4, 1], [2, 5, -1], [3, 5, 1], [1, 6, -1], [4, 5, 1], [2, 7, -1],
]; // [n, m, sign]  ->  cos(n*pi*x)cos(m*pi*y) + sign*cos(m*pi*x)cos(n*pi*y)

const LUT = 2048;
const COS = new Float32Array(LUT + 1);
for (let i = 0; i <= LUT; i++) COS[i] = Math.cos((2 * Math.PI * i) / LUT);
const cp = (t) => {            // cos(pi * t)
  let u = t * 0.5;
  u -= Math.floor(u);
  return COS[(u * LUT) | 0];
};
const smooth = (x) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
};

export function createChladni(canvas, host, options = {}) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { destroy() {} };

  const o = {
    dprCap: 1.5,
    interaction: 0.65,
    hold: 7,                  // seconds a pattern stays
    morph: 2.4,               // seconds to change to the next pattern
    color: [159, 176, 255],   // grain colour (light periwinkle)
    opacity: 0.62,
    ...options,
  };

  const reduced =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = 0, H = 0, dpr = 1, N = 0;
  let X = new Float32Array(0), Y = new Float32Array(0), TONE = new Uint8Array(0);
  let raf = 0, last = -1, visible = true, destroyed = false;

  let modeA = MODES[0], modeB = MODES[1], modeIdx = 1, clock = 0;
  const ptr = { x: 0.5, y: 0.5, active: false, energy: 0 };

  const countFor = (w) => (w >= 1024 ? 12000 : w >= 640 ? 7000 : 3500);

  function seed(n) {
    X = new Float32Array(n);
    Y = new Float32Array(n);
    TONE = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      X[i] = Math.random();
      Y[i] = Math.random();
      TONE[i] = Math.random() < 0.18 ? 1 : 0;
    }
    N = n;
  }

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    const d = Math.min(window.devicePixelRatio || 1, o.dprCap);
    if (!w || !h) return;
    if (w === W && h === H && d === dpr) return;
    W = w; H = h; dpr = d;
    canvas.width = Math.max(1, Math.round(W * dpr));
    canvas.height = Math.max(1, Math.round(H * dpr));
    const want = countFor(W);
    if (want !== N) seed(want);
    if (reduced) { settle(); draw(); }
  }

  /* ---------- physics ---------- */
  function step(dt, strength) {
    const k = dt * 60;
    clock += dt;
    let w = 0;
    if (clock > o.hold) {
      w = smooth((clock - o.hold) / o.morph);
      if (clock >= o.hold + o.morph) {          // morph finished: B becomes A, pick a new B
        modeA = modeB;
        let next;
        do { next = Math.floor(Math.random() * MODES.length); } while (MODES[next] === modeA || next === modeIdx);
        modeIdx = next;
        modeB = MODES[next];
        clock = 0;
        w = 0;
      }
    }
    const [n1, m1, s1] = modeA, [n2, m2, s2] = modeB;
    const gain = 0.034 * k, floor = 0.00025 * k;
    const pr = 0.17, pr2 = pr * pr;
    const aspect = W / Math.max(1, H);
    const px = ptr.x, py = ptr.y;
    const pointer = ptr.active && ptr.energy > 0.01 && !reduced;

    for (let i = 0; i < N; i++) {
      let x = X[i], y = Y[i];
      const p1 = cp(n1 * x) * cp(m1 * y) + s1 * cp(m1 * x) * cp(n1 * y);
      let a;
      if (w > 0) {
        const p2 = cp(n2 * x) * cp(m2 * y) + s2 * cp(m2 * x) * cp(n2 * y);
        a = Math.abs(p1 + (p2 - p1) * w) * 0.5;
      } else {
        a = Math.abs(p1) * 0.5;
      }
      const sz = floor + gain * a * (0.6 + a);
      const ang = Math.random() * 6.2831853;
      x += Math.cos(ang) * sz;
      y += Math.sin(ang) * sz * aspect;

      if (pointer) {
        const dx = (x - px) * aspect, dy = y - py;
        const d2 = dx * dx + dy * dy;
        if (d2 < pr2 * aspect * 0.35 + pr2) {
          const d = Math.sqrt(d2) + 1e-4;
          const f = Math.max(0, 1 - d / (pr * 1.5));
          const push = f * f * 0.02 * strength * ptr.energy * k;
          x += (dx / d) * push / aspect;
          y += (dy / d) * push;
        }
      }
      if (x < 0) x = -x; else if (x > 1) x = 2 - x;
      if (y < 0) y = -y; else if (y > 1) y = 2 - y;
      X[i] = x; Y[i] = y;
    }
    ptr.energy *= Math.pow(0.94, k);
  }

  function settle() {                           // used for reduced motion: pre-run, then draw once
    for (let i = 0; i < 420; i++) step(1 / 60, 0);
  }

  /* ---------- drawing ---------- */
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const size = Math.max(1, 1.45 * dpr);
    const half = size / 2;
    const [r, g, b] = o.color;
    ctx.fillStyle = `rgba(${r},${g},${b},${o.opacity})`;
    for (let i = 0; i < N; i++) {
      if (TONE[i] === 0) ctx.fillRect(X[i] * canvas.width - half, Y[i] * canvas.height - half, size, size);
    }
    ctx.fillStyle = `rgba(235,240,255,${Math.min(1, o.opacity + 0.3)})`;
    for (let i = 0; i < N; i++) {
      if (TONE[i] === 1) ctx.fillRect(X[i] * canvas.width - half, Y[i] * canvas.height - half, size, size);
    }
  }

  /* ---------- loop (only runs while visible) ---------- */
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (document.hidden) { last = -1; return; }
    const dt = last < 0 ? 1 / 60 : Math.min(0.05, (now - last) / 1000);
    last = now;
    step(dt, o.interaction);
    draw();
  }
  function start() {
    if (reduced || raf || destroyed || !visible) return;
    last = -1;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  /* ---------- events ---------- */
  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    ptr.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    ptr.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    ptr.active = true;
    ptr.energy = 1;
  };
  const onLeave = () => { ptr.active = false; };

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  let io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start(); else stop();
    });
    io.observe(host);
  }
  if (!reduced) {
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave, { passive: true });
  }

  resize();
  if (reduced) { settle(); draw(); } else { start(); }

  return {
    destroy() {
      destroyed = true;
      stop();
      ro.disconnect();
      if (io) io.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    },
  };
}
