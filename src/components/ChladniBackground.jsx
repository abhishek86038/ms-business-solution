import { useEffect, useRef } from 'react';
import { createChladni } from './chladniEngine';

/**
 * Animated Chladni-pattern particle background.
 * Put it as the FIRST child of a section that has position: relative and overflow: hidden.
 * It fills the section, sits behind the content, and never blocks clicks.
 *
 *   <section style={{ position: 'relative', overflow: 'hidden', background: '#050a14' }}>
 *     <ChladniBackground />
 *     <div style={{ position: 'relative', zIndex: 1 }}>...content...</div>
 *   </section>
 */
export default function ChladniBackground({ className, style, ...options }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !canvas.parentElement) return undefined;
    const engine = createChladni(canvas, canvas.parentElement, options);
    return () => engine.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  );
}
