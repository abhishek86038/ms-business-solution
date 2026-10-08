import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// Mandar's background-removed PNG must be saved as: src/assets/mandar-gokhale.png
import mandarPhoto from '../assets/mandar-cutout.png';
/* All styles for this section live here, so this one file is enough. Classes are prefixed ms-people- / ms-jelly. */
const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap');

/* Our People section. Every class is prefixed ms-people- or ms-jelly, so it cannot clash with the rest of the site. */
.ms-people{--ink:#0a1024;--mute:#5b6478;--blue:#2f3fff;--deep:#1610c0;--aw:440px;--ah:500px;
  position:relative;overflow-x:clip;background:#f4f6fb;color:var(--ink);font:400 17px/1.7 "DM Sans",system-ui,sans-serif;
  padding:120px 28px 110px}
.ms-people *,.ms-people *::before,.ms-people *::after{box-sizing:border-box}
.ms-people-in{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:90px;align-items:center}

/* ---- visual ---- */
.ms-people-visual{position:relative;width:var(--aw);height:var(--ah);justify-self:center}
.ms-people-arch{position:absolute;inset:0;border-radius:calc(var(--aw)/2) calc(var(--aw)/2) 22px 22px;overflow:hidden;background:var(--blue);
  box-shadow:0 30px 60px -28px rgba(30,40,200,.55)}
.ms-people-arch::before{content:"";position:absolute;inset:0;opacity:.9;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='26'><path d='M0 13 Q22 -1 45 13 T90 13' fill='none' stroke='%231610c0' stroke-opacity='.28' stroke-width='2'/></svg>")}
.ms-people-arch::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 38%,rgba(150,165,255,.45),transparent 58%)}
.ms-people-photo{position:absolute;left:50%;bottom:0;height:93%;width:auto;max-width:none;transform:translateX(-50%);z-index:2;
  filter:drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(0 14px 18px rgba(10,16,60,.25))}
.ms-people-card{position:absolute;z-index:3;left:-44px;top:46px;width:128px;padding:16px 12px 14px;border-radius:26px;background:#fff;text-align:center;
  box-shadow:0 14px 34px rgba(20,30,90,.14)}
.ms-people-ic{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:linear-gradient(145deg,#4a58ff,var(--deep));color:#fff;flex:none}
.ms-people-ic svg{width:20px;height:20px}
.ms-people-card .ms-people-ic{margin:0 auto 8px;box-shadow:0 0 0 7px rgba(47,63,255,.12)}
.ms-people-card small{display:block;font-size:12px;line-height:1.2;color:var(--mute)}
.ms-people-card b{display:block;font-size:21px;line-height:1.25;font-weight:700}
.ms-people-badge{position:absolute;z-index:3;right:-64px;bottom:34px;display:flex;align-items:center;gap:12px;padding:8px 24px 8px 8px;border-radius:999px;background:#fff;
  font-size:15px;font-weight:500;line-height:1.25;box-shadow:0 14px 34px rgba(20,30,90,.16)}
.ms-people-badge .ms-people-ic{background:#0a1024;width:44px;height:44px}
.ms-people-spark{position:absolute;width:26px;height:26px;color:var(--blue)}
.ms-people-spark.s1{right:-86px;bottom:92px}
.ms-people-spark path{fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round}

/* ---- text ---- */
.ms-people-eyebrow{display:flex;align-items:center;gap:12px;margin:0 0 14px;font-size:17px;font-weight:500}
.ms-people-eyebrow::before{content:"";width:30px;height:2px;border-radius:2px;background:var(--blue)}
.ms-people h2{margin:0;font-size:clamp(36px,4.6vw,58px);line-height:1.08;font-weight:700;letter-spacing:-.025em}
.ms-people h2 em{font-style:italic;font-weight:500;color:var(--blue)}
.ms-people h2 .ms-people-spark{position:static;display:inline-block;vertical-align:top;margin:-2px 0 0 4px;width:22px;height:22px}
.ms-people-lead{margin:22px 0 0;max-width:34em;color:var(--mute)}
.ms-people-stats{display:grid;grid-template-columns:repeat(3,auto);justify-content:start;gap:16px 56px;margin:34px 0 0;padding:0;list-style:none}
.ms-people-stats b{display:block;font-size:34px;line-height:1.15;font-weight:700;letter-spacing:-.02em}
.ms-people-stats span{font-size:14.5px;color:var(--mute)}
.ms-people-pills{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
.ms-people-pill{display:inline-flex;align-items:center;gap:12px;padding:8px 26px 8px 8px;border-radius:999px;background:#fff;color:var(--ink);text-decoration:none;
  font-size:15.5px;font-weight:500;box-shadow:0 12px 32px rgba(20,30,90,.12);transition:transform .25s,box-shadow .25s}
.ms-people-pill:hover{transform:translateY(-2px);box-shadow:0 16px 38px rgba(20,30,90,.2)}
.ms-people-pill:focus-visible,.ms-people-more:focus-visible{outline:2px solid var(--blue);outline-offset:3px}
.ms-people-more{display:inline-block;margin-top:26px;color:var(--blue);font-weight:600;text-decoration:none}
.ms-people-more:hover{text-decoration:underline}

/* ---- reveal animation ---- */
.ms-people [data-r]{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1);transition-delay:calc(var(--i,0)*80ms)}
.ms-people .ms-people-arch{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.ms-people .ms-people-photo{opacity:0;transition:opacity .8s ease .2s}
.ms-people .ms-people-card,.ms-people .ms-people-badge{opacity:0;transform:scale(.9)}
.ms-people.is-in [data-r]{opacity:1;transform:none}
.ms-people.is-in .ms-people-arch{opacity:1;transform:none}
.ms-people.is-in .ms-people-photo{opacity:1}
.ms-people.is-in .ms-people-card{animation:ms-pop .6s cubic-bezier(.3,1.6,.5,1) .55s both}
.ms-people.is-in .ms-people-badge{animation:ms-pop .6s cubic-bezier(.3,1.6,.5,1) .7s both}
@keyframes ms-pop{0%{opacity:0;transform:scale(.9)}70%{opacity:1;transform:scale(1.04)}100%{opacity:1;transform:scale(1)}}

/* ---- mobile ---- */
@media(max-width:900px){
  .ms-people{--aw:300px;--ah:370px;padding:104px 22px 80px}
  .ms-people-in{grid-template-columns:minmax(0,1fr);gap:56px}
  .ms-people-card{left:-14px;top:30px;width:112px;padding:13px 10px 12px;border-radius:22px}
  .ms-people-card b{font-size:18px}
  .ms-people-badge{right:-14px;bottom:22px;font-size:13px;padding:6px 18px 6px 6px;gap:9px}
  .ms-people-badge .ms-people-ic{width:36px;height:36px}
  .ms-people-spark.s1{display:none}
  .ms-people-stats{gap:14px 26px}.ms-people-stats b{font-size:28px}
}
@media(prefers-reduced-motion:reduce){
  .ms-people [data-r],.ms-people .ms-people-arch,.ms-people .ms-people-photo,.ms-people .ms-people-card,.ms-people .ms-people-badge{opacity:1!important;transform:none!important;transition:none!important;animation:none!important}
}

.ms-jelly{--h:58px;--w:260px;
  position:relative;display:inline-grid;place-items:center;height:var(--h);width:var(--w);padding:0;border:0;border-radius:999px;
  cursor:pointer;color:#fff;font:600 17px/1 Inter,system-ui,sans-serif;letter-spacing:.01em;isolation:isolate;
  -webkit-tap-highlight-color:transparent;
  background:linear-gradient(90deg,#1a1fd2 0%,#3345ff 42%,#1610c0 100%);
  box-shadow:0 0 26px rgba(58,75,255,.55),0 0 80px rgba(40,40,255,.35),0 10px 24px rgba(0,0,40,.5);
  transition:width .6s cubic-bezier(.34,1.45,.5,1),transform .35s cubic-bezier(.34,1.8,.5,1),box-shadow .3s}
.ms-jelly *{box-sizing:border-box}
/* glossy highlight blob */
.ms-jelly::before{content:"";position:absolute;z-index:-1;left:16%;top:8%;width:46%;height:46%;border-radius:50%;pointer-events:none;
  background:radial-gradient(ellipse at 50% 40%,rgba(255,255,255,.6),rgba(255,255,255,0) 70%);filter:blur(5px);
  transition:left .6s cubic-bezier(.34,1.45,.5,1),width .6s cubic-bezier(.34,1.45,.5,1)}
/* soft inner rim light */
.ms-jelly::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  box-shadow:inset 0 0 0 1px rgba(170,180,255,.28),inset 0 0 16px rgba(150,165,255,.55),inset 0 -7px 14px rgba(8,4,110,.55)}
.ms-jelly:hover{transform:scale(1.05,.94);box-shadow:0 0 34px rgba(70,90,255,.7),0 0 100px rgba(40,40,255,.45),0 10px 24px rgba(0,0,40,.5)}
.ms-jelly:active{transform:scale(1.1,.86)}
.ms-jelly:focus-visible{outline:2px solid #9f98ff;outline-offset:5px}
.ms-jelly.is-wobble{animation:ms-wobble .7s cubic-bezier(.3,.6,.4,1)}
@keyframes ms-wobble{0%{transform:scale(1.1,.86)}28%{transform:scale(.92,1.1)}52%{transform:scale(1.04,.97)}74%{transform:scale(.99,1.01)}100%{transform:scale(1)}}

.ms-jelly-label{white-space:nowrap;transition:opacity .2s,transform .35s cubic-bezier(.34,1.5,.5,1)}
.ms-jelly>svg{position:absolute;left:50%;top:50%;width:30px;height:30px;margin:-15px 0 0 -15px;opacity:0;pointer-events:none;overflow:visible;transition:opacity .2s}

/* circle states (loading + success) */
.ms-jelly[data-state=loading],.ms-jelly[data-state=success]{width:var(--h)}
.ms-jelly[data-state=loading]::before,.ms-jelly[data-state=success]::before{left:20%;width:54%}
.ms-jelly[data-state=loading] .ms-jelly-label,.ms-jelly[data-state=success] .ms-jelly-label{opacity:0;transform:scale(.5)}

/* spinner */
.ms-spin{animation:ms-rot .85s linear infinite}
.ms-spin circle{fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-dasharray:24 80}
.ms-jelly[data-state=loading] .ms-spin{opacity:1}
@keyframes ms-rot{to{transform:rotate(360deg)}}

/* check mark */
.ms-check path{fill:none;stroke:#fff;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:30;stroke-dashoffset:30}
.ms-jelly[data-state=success] .ms-check{opacity:1}
.ms-jelly[data-state=success] .ms-check path{animation:ms-draw .45s ease-out .12s forwards}
@keyframes ms-draw{to{stroke-dashoffset:0}}

/* burst dots */
.ms-dots{position:absolute;left:50%;top:50%;width:0;height:0;pointer-events:none}
.ms-dots i{position:absolute;left:-5px;top:-5px;width:10px;height:10px;border-radius:50%;background:#3a4bff;box-shadow:0 0 10px rgba(80,100,255,.9);
  opacity:0;transform:rotate(var(--a)) translateY(-22px) scale(.8)}
.ms-jelly[data-state=success] .ms-dots i{animation:ms-burst .95s cubic-bezier(.2,.8,.3,1) .08s both}
@keyframes ms-burst{0%{opacity:1;transform:rotate(var(--a)) translateY(-22px) scale(.8)}55%{opacity:1}100%{opacity:0;transform:rotate(var(--a)) translateY(-64px) scale(.2)}}

.ms-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

@media(prefers-reduced-motion:reduce){
  .ms-jelly,.ms-jelly::before,.ms-jelly-label{transition-duration:.01s}
  .ms-jelly.is-wobble,.ms-dots i{animation:none!important}
  .ms-jelly:hover,.ms-jelly:active{transform:none}
}

/* jelly button on the light section: softer glow so it doesn't look muddy */
.ms-people .ms-jelly{box-shadow:0 16px 30px -10px rgba(47,63,255,.65),0 0 0 1px rgba(22,16,192,.25)}
.ms-people .ms-jelly:hover{box-shadow:0 20px 38px -10px rgba(47,63,255,.8),0 0 0 1px rgba(22,16,192,.3)}
.ms-jelly-slot{display:flex;justify-content:center;flex:none}
.ms-people-pills .ms-jelly{--h:56px;text-decoration:none;font-size:15.5px}
.ms-people .ms-jelly-label{display:inline-flex;align-items:center;gap:10px}
.ms-people .ms-jelly-label .ms-in{width:20px;height:20px;flex:none}
`;

const LINKEDIN_URL = 'https://www.linkedin.com/in/mandar-gokhale-0014837/';

const reducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Number that counts up from 0 once the section is visible */
function CountUp({ end, suffix = '', run }) {
    const [val, setVal] = useState(() => (reducedMotion() ? end : 0));

    useEffect(() => {
        if (!run || reducedMotion()) {
            if (run) setVal(end);
            return undefined;
        }
        let raf;
        let t0 = null;
        const dur = 1300;
        const step = (t) => {
            if (t0 === null) t0 = t;
            const p = Math.min((t - t0) / dur, 1);
            setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [run, end]);

    return <b>{val}{val === end ? suffix : ''}</b>;
}

/* Blue "jelly" link: squish, spinner, check mark + dots, then opens the link */
function JellyLink({ href, children }) {
    const [state, setState] = useState('idle'); // idle | loading | success
    const [wobble, setWobble] = useState(false);
    const [live, setLive] = useState('');
    const [width, setWidth] = useState(null);
    const labelRef = useRef(null);
    const busy = useRef(false);
    const timers = useRef([]);

    useLayoutEffect(() => {
        const fit = () => {
            if (labelRef.current) setWidth(labelRef.current.offsetWidth + 84);
        };
        fit();
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
        window.addEventListener('resize', fit);
        return () => window.removeEventListener('resize', fit);
    }, []);

    useEffect(() => () => timers.current.forEach(clearTimeout), []);

    const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

    const onClick = (e) => {
        e.preventDefault();
        if (busy.current) return;
        busy.current = true;

        setWobble(false);
        requestAnimationFrame(() => setWobble(true));

        later(() => { setState('loading'); setLive('Opening'); }, 140);
        later(() => { setState('success'); setLive('Done'); }, 1200);
        later(() => {
            const w = window.open(href, '_blank');
            if (w) {
                try { w.opener = null; } catch (err) { /* ignore */ }
            } else {
                window.location.href = href; // popup blocked: open in the same tab
            }
        }, 1900);
        later(() => {
            setState('idle');
            setWobble(false);
            setLive('');
            busy.current = false;
        }, 3000);
    };

    const dots = [0, 45, 90, 135, 180, 225, 270, 315];

    return (
        <span className="ms-jelly-slot" style={width ? { width } : undefined}>
            <a
                className={`ms-jelly${wobble ? ' is-wobble' : ''}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-state={state}
                aria-busy={state === 'loading' ? 'true' : undefined}
                onClick={onClick}
                style={width ? { '--w': `${width}px` } : undefined}
            >
                <span className="ms-jelly-label" ref={labelRef}>{children}</span>
                <svg className="ms-spin" viewBox="0 0 30 30" aria-hidden="true">
                    <circle cx="15" cy="15" r="11" />
                </svg>
                <svg className="ms-check" viewBox="0 0 30 30" aria-hidden="true">
                    <path d="M8 15.5l5 5 9-11" />
                </svg>
                <span className="ms-dots" aria-hidden="true">
                    {dots.map((a) => <i key={a} style={{ '--a': `${a}deg` }} />)}
                </span>
                <span className="ms-sr" role="status" aria-live="polite">{live}</span>
            </a>
        </span>
    );
}

const Spark = ({ className = '' }) => (
    <svg className={`ms-people-spark ${className}`} viewBox="0 0 26 26" aria-hidden="true">
        <path d="M4 9l5 2M13 3v6M22 9l-5 2" />
    </svg>
);

function Team() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || !('IntersectionObserver' in window)) {
            setInView(true);
            return undefined;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <>
            <style>{css}</style>
            <section
                ref={ref}
                className={`ms-people${inView ? ' is-in' : ''}`}
                id="people"
                aria-labelledby="ms-people-title"
            >
                <div className="ms-people-in">
                    {/* ---------- visual ---------- */}
                    <div className="ms-people-visual">
                        <div className="ms-people-arch" aria-hidden="true" />
                        <img
                            className="ms-people-photo"
                            src={mandarPhoto}
                            alt="Mandar Gokhale, Principal Chartered Accountant"
                            width="575"
                            height="648"
                        />

                        <div className="ms-people-card">
                            <span className="ms-people-ic">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                                    <circle cx="12" cy="9.5" r="2.5" />
                                </svg>
                            </span>
                            <small>Based in</small>
                            <b>Norwest</b>
                        </div>

                        <div className="ms-people-badge">
                            <span className="ms-people-ic">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="9" r="5" />
                                    <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
                                </svg>
                            </span>
                            <span>Principal Chartered<br />Accountant</span>
                        </div>
                        <Spark className="s1" />
                    </div>

                    {/* ---------- text ---------- */}
                    <div className="ms-people-text">
                        <p className="ms-people-eyebrow" data-r style={{ '--i': '0' }}>Our People</p>
                        <h2 id="ms-people-title" data-r style={{ '--i': '1' }}>
                            Who is <em>Mandar Gokhale?</em>
                            <Spark />
                        </h2>
                        <p className="ms-people-lead" data-r style={{ '--i': '2' }}>
                            M&amp;S Business Solutions is headed by Mandar Gokhale, a seasoned Chartered
                            Accountant from the Institute of Chartered Accountants in Australia, with over a
                            decade of experience in accounting and business. He specializes in annual
                            financial statements, business and individual tax returns, and complete financial
                            accounting for partnerships, companies, sole traders, SMSF and trusts.
                        </p>

                        <ul className="ms-people-stats" data-r style={{ '--i': '3' }}>
                            <li><CountUp end={10} suffix="+" run={inView} /><span>Years of Experience</span></li>
                            <li><CountUp end={3} run={inView} /><span>Core Services</span></li>
                            <li><CountUp end={7} run={inView} /><span>Client Types Served</span></li>
                        </ul>

                        <div className="ms-people-pills" data-r style={{ '--i': '4' }}>
                            <a className="ms-people-pill" href="tel:+61288147905">
                                <span className="ms-people-ic">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                                    </svg>
                                </span>
                                02 8814 7905
                            </a>

                            <JellyLink href={LINKEDIN_URL}>
                                <svg className="ms-in" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M6.5 8.7H3.3V20h3.2V8.7zM4.9 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.7 20v-6.2c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-2.9 1.6V8.7h-3.2V20H14v-6.3c0-1.2.5-2.3 1.9-2.3 1.4 0 1.6 1.3 1.6 2.4V20h3.2z" />
                                </svg>
                                LinkedIn Profile
                            </JellyLink>
                        </div>

                        {/* TODO: set this to your real full-profile route, or delete the link */}
                        <a className="ms-people-more" href="#" data-r style={{ '--i': '5' }}>
                            Read full profile →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Team };
export default Team;