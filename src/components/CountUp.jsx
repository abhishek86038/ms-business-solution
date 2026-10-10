import { useEffect, useRef, useState } from 'react';

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * A number that counts up from 0 once it scrolls into view.
 * Usage: <CountUp end={10} suffix="+" />
 */
export default function CountUp({ end, suffix = '', duration = 1300 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(() => (reduced() ? end : 0));
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !('IntersectionObserver' in window)) {
      setVal(end);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  useEffect(() => {
    if (!run) return undefined;
    let raf;
    let t0 = null;
    const step = (t) => {
      if (t0 === null) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, end, duration]);

  return <span ref={ref}>{val}{val === end ? suffix : ''}</span>;
}
