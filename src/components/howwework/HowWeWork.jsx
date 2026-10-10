import { useEffect, useRef, useState } from 'react';

/* "Simple from the first call": 3 steps that fill one after another (0% to 100%), then the line travels to the next step. */
const css = `
.ms-how{--ink:#0a1024;--mute:#5b6478;--blue:#2f3fff;--deep:#1610c0;--track:#dfe4f5;
  position:relative;overflow-x:clip;padding:100px 28px 110px;background:radial-gradient(900px 380px at 50% 0%,#e9edff 0%,#f4f6fb 70%);color:var(--ink);
  font:400 17px/1.65 "DM Sans",system-ui,sans-serif}
.ms-how *,.ms-how *::before,.ms-how *::after{box-sizing:border-box}
.ms-how-in{max-width:1100px;margin:0 auto;text-align:center}
.ms-how h2{margin:0;font-size:clamp(32px,4.2vw,54px);line-height:1.08;font-weight:700;letter-spacing:-.03em}
.ms-how-sub{margin:14px auto 0;max-width:30em;color:var(--mute)}
.ms-how-list{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0 24px;margin:70px 0 0;padding:0;list-style:none;--gap:24px}
.ms-how-step{position:relative}

/* line between two steps */
.ms-how-seg{position:absolute;z-index:0;left:50%;top:40px;width:calc(100% + var(--gap));height:4px;border-radius:4px;background:var(--track)}
.ms-how-segfill{position:absolute;left:0;top:0;bottom:0;width:calc(var(--seg)*100%);border-radius:4px;background:linear-gradient(90deg,var(--blue),#7a86ff)}
.ms-how-head{position:absolute;right:-7px;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:50%;background:#fff;box-shadow:0 0 0 3px var(--blue),0 0 18px 6px rgba(47,63,255,.55);transition:opacity .2s}

/* numbered ring */
.ms-how-node{position:relative;z-index:2;display:grid;place-items:center;width:84px;height:84px;margin:0 auto;border-radius:50%;background:#fff;box-shadow:0 12px 30px -8px rgba(47,63,255,.35);
  transition:background .4s,box-shadow .4s,transform .4s cubic-bezier(.3,1.6,.5,1)}
.ms-how-ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.ms-how-ring circle{fill:none;stroke-width:4.5}
.ms-how-ring .trk{stroke:var(--track)}
.ms-how-ring .bar{stroke:url(#ms-how-grad);stroke-linecap:round}
.ms-how-core{position:relative;display:grid;place-items:center;font-weight:700;color:var(--blue)}
.ms-how-core b{font-size:22px;letter-spacing:-.01em;font-weight:700}
.ms-how-core small{font-size:12px;font-weight:700;margin-left:1px}
.ms-how-check{width:34px;height:34px;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:30;stroke-dashoffset:30;animation:ms-how-draw .45s ease-out .1s forwards}
.ms-how-node.is-done{background:linear-gradient(145deg,#4a58ff,var(--deep));transform:scale(1.06);box-shadow:0 16px 36px -8px rgba(47,63,255,.65)}
.ms-how-node.is-done .ms-how-ring{opacity:0}
.ms-how-node.is-active:not(.is-done)::before{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px solid rgba(47,63,255,.4);animation:ms-how-pulse 1.4s ease-out infinite}
@keyframes ms-how-pulse{from{transform:scale(.92);opacity:1}to{transform:scale(1.28);opacity:0}}
@keyframes ms-how-draw{to{stroke-dashoffset:0}}
.ms-how-dots{position:absolute;left:50%;top:50%;width:0;height:0;pointer-events:none}
.ms-how-dots i{position:absolute;left:-4px;top:-4px;width:8px;height:8px;border-radius:50%;background:var(--blue);box-shadow:0 0 10px rgba(80,100,255,.9);
  opacity:0;animation:ms-how-burst .9s cubic-bezier(.2,.8,.3,1) both;transform:rotate(var(--a)) translateY(-46px) scale(.8)}
@keyframes ms-how-burst{0%{opacity:1;transform:rotate(var(--a)) translateY(-46px) scale(.9)}60%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-86px) scale(.2)}}

/* card under each ring */
.ms-how-card{margin:30px 6px 0;padding:26px 24px 28px;border-radius:24px;background:#fff;border:1px solid rgba(47,63,255,.08);box-shadow:0 10px 30px rgba(20,30,90,.07);
  transition:transform .55s cubic-bezier(.2,.7,.2,1),box-shadow .55s,opacity .55s,border-color .55s}
.ms-how-step.is-wait .ms-how-card{opacity:.4;transform:translateY(10px)}
.ms-how-step.is-active .ms-how-card{transform:translateY(-6px);border-color:rgba(47,63,255,.35);box-shadow:0 24px 46px -14px rgba(47,63,255,.38)}
.ms-how-tag{display:inline-block;margin-bottom:14px;padding:5px 12px;border-radius:999px;background:#eef0ff;color:var(--blue);font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.ms-how-card h3{margin:0 0 8px;font-size:22px;line-height:1.2;font-weight:700;letter-spacing:-.01em}
.ms-how-card p{margin:0;color:var(--mute);font-size:16px}
.ms-how-ic{display:grid;place-items:center;width:46px;height:46px;margin:0 auto 14px;border-radius:14px;background:#eef0ff;color:var(--blue)}
.ms-how-ic svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}

.ms-how-replay{margin:46px auto 0;display:inline-flex;align-items:center;gap:8px;padding:11px 22px;border:0;border-radius:999px;background:#fff;color:var(--blue);font:600 15px "DM Sans",system-ui,sans-serif;cursor:pointer;
  box-shadow:0 10px 26px rgba(20,30,90,.1);opacity:0;pointer-events:none;transform:translateY(8px);transition:opacity .4s,transform .4s,box-shadow .25s}
.ms-how-replay.is-show{opacity:1;pointer-events:auto;transform:none}
.ms-how-replay:hover{box-shadow:0 14px 30px rgba(47,63,255,.25)}
.ms-how :focus-visible{outline:2px solid var(--blue);outline-offset:3px}

/* mobile: vertical timeline */
@media(max-width:760px){
  .ms-how{padding:80px 20px 90px}
  .ms-how-list{grid-template-columns:minmax(0,1fr);gap:26px 0;margin-top:48px;--gap:26px}
  .ms-how-step{display:grid;grid-template-columns:84px minmax(0,1fr);gap:0 16px;text-align:left;align-items:start}
  .ms-how-seg{left:40px;top:42px;width:4px;height:calc(100% + var(--gap))}
  .ms-how-segfill{left:0;right:0;top:0;bottom:auto;width:auto;height:calc(var(--seg)*100%);background:linear-gradient(180deg,var(--blue),#7a86ff)}
  .ms-how-head{right:auto;left:50%;top:auto;bottom:-7px;margin:0 0 0 -7px}
  .ms-how-node{margin:0}
  .ms-how-card{margin:0;padding:20px 20px 22px}
  .ms-how-ic{margin:0 0 12px}
}
@media(prefers-reduced-motion:reduce){
  .ms-how *{transition:none!important}
  .ms-how-node.is-active::before,.ms-how-dots i{animation:none!important}
  .ms-how-check{animation:none!important;stroke-dashoffset:0}
}
`;

const STEPS = [
  { title: "Introductory consultation", text: "We learn about your business and goals.",
    icon: (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.4A8 8 0 1 1 21 12z"/></svg>) },
  { title: "Review of your position", text: "We look at your accounts, structure and tax.",
    icon: (<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.2-4.2"/></svg>) },
  { title: "Clear next steps", text: "You get a plan and we get to work.",
    icon: (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4M5 5h11l-2 3.5 2 3.5H5"/></svg>) },
];

const FILL = 1.6;    // seconds for one step to go from 0% to 100%
const TRAVEL = 0.7;  // seconds for the line to travel to the next step
const STARTS = [0, FILL + TRAVEL, 2 * (FILL + TRAVEL)];
const END = STARTS[2] + FILL;

const clamp = (x) => Math.min(1, Math.max(0, x));
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Node({ index, pct, done, active }) {
  const C = 2 * Math.PI * 38;
  return (
    <div className={`ms-how-node${done ? ' is-done' : ''}${active ? ' is-active' : ''}`} aria-hidden="true">
      <svg className="ms-how-ring" viewBox="0 0 84 84">
        <circle className="trk" cx="42" cy="42" r="38" />
        <circle className="bar" cx="42" cy="42" r="38" strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} />
      </svg>
      <span className="ms-how-core">
        {done ? (
          <svg className="ms-how-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        ) : pct > 0 ? (
          <b>{pct}<small>%</small></b>
        ) : (
          <b>0{index + 1}</b>
        )}
      </span>
      {done && (
        <span className="ms-how-dots">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <i key={a} style={{ '--a': `${a}deg` }} />)}
        </span>
      )}
    </div>
  );
}

export default function HowWeWork() {
  const ref = useRef(null);
  const raf = useRef(0);
  const started = useRef(false);
  const [t, setT] = useState(() => (reduced() ? END : 0));

  const play = () => {
    cancelAnimationFrame(raf.current);
    const t0 = performance.now();
    setT(0);
    const tick = (now) => {
      const el = (now - t0) / 1000;
      setT(Math.min(el, END));
      if (el < END) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = ref.current;
    if (reduced() || !el || !('IntersectionObserver' in window)) {
      setT(END);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const pct = STARTS.map((s) => Math.round(ease(clamp((t - s) / FILL)) * 100));
  const seg = [0, 1].map((i) => ease(clamp((t - (STARTS[i] + FILL)) / TRAVEL)));
  const finished = t >= END;

  return (
    <section ref={ref} className="ms-how" aria-labelledby="ms-how-title">
      <style>{css}</style>
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="ms-how-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7a86ff" />
            <stop offset="1" stopColor="#2f3fff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="ms-how-in">
        <h2 id="ms-how-title">Simple from the first call</h2>
        <p className="ms-how-sub">From your first conversation to a clear plan, in three steps.</p>

        <ol className="ms-how-list">
          {STEPS.map((s, i) => {
            const reached = t >= STARTS[i];
            const done = pct[i] === 100;
            const active = reached && !done;
            const cls = `ms-how-step${!reached ? ' is-wait' : ''}${active ? ' is-active' : ''}${done ? ' is-done' : ''}`;
            return (
              <li key={s.title} className={cls}>
                {i < 2 && (
                  <span className="ms-how-seg" aria-hidden="true" style={{ '--seg': seg[i] }}>
                    <span className="ms-how-segfill">
                      <span className="ms-how-head" style={{ opacity: seg[i] > 0 && seg[i] < 1 ? 1 : 0 }} />
                    </span>
                  </span>
                )}
                <Node index={i} pct={pct[i]} done={done} active={active || (reached && !done)} />
                <div className="ms-how-card">
                  <div className="ms-how-ic">{s.icon}</div>
                  <span className="ms-how-tag">Step {i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <button type="button" className={`ms-how-replay${finished ? ' is-show' : ''}`} onClick={play} tabIndex={finished ? 0 : -1}>
          <span aria-hidden="true">↻</span> Replay
        </button>
      </div>
    </section>
  );
}
