import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Team from '../components/Team'; // the arch-design hero (Mandar's photo, stats, LinkedIn button)

/* Styles for the new sections below the hero. All classes are prefixed ms-pf- */
const css = `
.ms-pf{--ink:#0a1024;--mute:#5b6478;--blue:#2f3fff;--deep:#1610c0;font:400 17px/1.7 "DM Sans",system-ui,sans-serif;color:var(--ink)}
.ms-pf *,.ms-pf *::before,.ms-pf *::after{box-sizing:border-box}
.ms-pf-wrap{max-width:1160px;margin:0 auto;padding:0 28px}
.ms-pf-sec{position:relative;overflow-x:clip;padding:110px 0}
.ms-pf-eyebrow{display:flex;align-items:center;gap:12px;margin:0 0 14px;font-size:17px;font-weight:500}
.ms-pf-eyebrow::before{content:"";width:30px;height:2px;border-radius:2px;background:var(--blue)}
.ms-pf h2{margin:0;font-size:clamp(32px,4vw,50px);line-height:1.1;font-weight:700;letter-spacing:-.025em}
.ms-pf h2 em{font-style:italic;font-weight:500;color:var(--blue)}
.ms-pf-lead{margin:18px 0 0;max-width:30em;color:var(--mute)}

/* services */
.ms-pf-help{background:#fff}
.ms-pf-help .ms-pf-wrap{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.3fr);gap:80px;align-items:start}
.ms-pf-list{margin:0;padding:0;list-style:none;border-top:1px solid #dfe4f1}
.ms-pf-row{display:grid;grid-template-columns:56px minmax(0,1fr);gap:8px 18px;padding:30px 0;border-bottom:1px solid #dfe4f1;transition:background .3s}
.ms-pf-row:hover{background:linear-gradient(90deg,rgba(47,63,255,.06),transparent)}
.ms-pf-num{font-size:15px;font-weight:700;color:var(--blue);padding-top:6px}
.ms-pf-row h3{margin:0;font-size:clamp(22px,2.2vw,28px);line-height:1.2;font-weight:700;letter-spacing:-.02em}
.ms-pf-row p{grid-column:2;margin:0;color:var(--mute);max-width:36em}
.ms-pf-row a{grid-column:2;justify-self:start;margin-top:6px;color:var(--blue);font-weight:600;text-decoration:none}
.ms-pf-row a:hover{text-decoration:underline}

/* who we work with */
.ms-pf-who{background:#f4f6fb}
.ms-pf-chips{display:flex;flex-wrap:wrap;gap:12px;margin:34px 0 0;padding:0;list-style:none}
.ms-pf-chips li{padding:12px 24px;border-radius:999px;background:#fff;font-weight:500;box-shadow:0 10px 26px rgba(20,30,90,.1);transition:transform .25s,box-shadow .25s}
.ms-pf-chips li:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(20,30,90,.18)}
.ms-pf-note{margin:30px 0 0;color:var(--mute);max-width:40em}

/* contact band (dark, matches the hero) */
.ms-pf-cta{background:radial-gradient(900px 420px at 50% 120%,#1a2bd0 0,#05081a 62%);color:#fff;text-align:center}
.ms-pf-cta::before{content:"";position:absolute;left:50%;top:-34vw;width:70vw;height:70vw;transform:translateX(-50%);border-radius:50%;border:1px solid rgba(124,140,255,.35);box-shadow:inset 0 0 90px rgba(47,63,255,.35);pointer-events:none}
.ms-pf-cta .ms-pf-wrap{position:relative}
.ms-pf-cta h2{max-width:14em;margin:0 auto}
.ms-pf-cta h2 em{color:#9fa9ff}
.ms-pf-cta .ms-pf-lead{margin:18px auto 0;color:rgba(255,255,255,.72)}
.ms-pf-btns{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:34px}
.ms-pf-btn{display:inline-block;padding:15px 30px;border-radius:999px;font-weight:600;font-size:16px;text-decoration:none;transition:transform .25s,box-shadow .25s}
.ms-pf-btn.w{background:#fff;color:#05081a}
.ms-pf-btn.d{background:#1a0fc9;color:#fff;box-shadow:inset 0 0 0 1px rgba(143,134,255,.5)}
.ms-pf-btn:hover{transform:translateY(-2px);box-shadow:0 12px 34px rgba(58,45,255,.55)}
.ms-pf-btn:focus-visible,.ms-pf a:focus-visible{outline:2px solid #9f98ff;outline-offset:3px}
.ms-pf-info{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin:64px auto 0;max-width:960px;padding-top:36px;border-top:1px solid rgba(255,255,255,.14);text-align:left}
.ms-pf-info small{display:block;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#9fa9ff;margin-bottom:6px}
.ms-pf-info p{margin:0;color:rgba(255,255,255,.88);font-size:16px;line-height:1.55}
.ms-pf-info a{color:inherit;text-decoration:none}
.ms-pf-info a:hover{text-decoration:underline}

/* reveal on scroll */
.ms-pf [data-r]{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1);transition-delay:calc(var(--i,0)*90ms)}
.ms-pf .is-in [data-r],.ms-pf [data-r].is-in{opacity:1;transform:none}

@media(max-width:900px){
  .ms-pf-sec{padding:80px 0}
  .ms-pf-wrap{padding:0 22px}
  .ms-pf-help .ms-pf-wrap{grid-template-columns:minmax(0,1fr);gap:40px}
  .ms-pf-info{grid-template-columns:minmax(0,1fr);gap:20px;margin-top:48px}
  .ms-pf-cta::before{top:-60vw;width:130vw;height:130vw}
}
@media(prefers-reduced-motion:reduce){.ms-pf [data-r]{opacity:1!important;transform:none!important;transition:none!important}}
`;

/* adds the class "is-in" once the element is on screen (runs once) */
function useReveal() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export default function OurPeople() {
  const [helpRef, helpSeen] = useReveal();
  const [whoRef, whoSeen] = useReveal();
  const [ctaRef, ctaSeen] = useReveal();

  return (
    <div className="ms-pf">
      <style>{css}</style>

      {/* 1. Hero: Who is Mandar Gokhale (arch design) */}
      <Team />

      {/* 2. What the firm does for clients */}
      <section ref={helpRef} data-theme="light" className={`ms-pf-sec ms-pf-help${helpSeen ? ' is-in' : ''}`} aria-labelledby="ms-pf-help-title">
        <div className="ms-pf-wrap">
          <div>
            <p className="ms-pf-eyebrow" data-r style={{ '--i': '0' }}>How we help</p>
            <h2 id="ms-pf-help-title" data-r style={{ '--i': '1' }}>
              Numbers you can <em>rely on.</em>
            </h2>
            <p className="ms-pf-lead" data-r style={{ '--i': '2' }}>
              Under Mandar&apos;s leadership, M&amp;S Business Solutions looks after your accounts, your tax and
              your plans for the future, so you can focus on running the business.
            </p>
          </div>

          <ul className="ms-pf-list">
            <li className="ms-pf-row" data-r style={{ '--i': '1' }}>
              <span className="ms-pf-num">01</span>
              <h3>Accounting</h3>
              <p>
                Accurate financial statements and complete financial accounting, with sound plans to cut costs,
                increase profits and make your business grow.
              </p>
              <Link to="/services/accounting">Accounting services →</Link>
            </li>
            <li className="ms-pf-row" data-r style={{ '--i': '2' }}>
              <span className="ms-pf-num">02</span>
              <h3>Taxation</h3>
              <p>
                Business and individual tax returns and other statutory returns, plus a clear tax strategy to
                ethically reduce your tax while you grow.
              </p>
              <Link to="/services/taxation">Taxation services →</Link>
            </li>
            <li className="ms-pf-row" data-r style={{ '--i': '3' }}>
              <span className="ms-pf-num">03</span>
              <h3>Financial advice</h3>
              <p>
                Guidance from experienced financial planner associates of M&amp;S, including planning for your
                retirement, to help you save money.
              </p>
              <Link to="/services">All services →</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Who the firm works with */}
      <section ref={whoRef} data-theme="light" className={`ms-pf-sec ms-pf-who${whoSeen ? ' is-in' : ''}`} aria-labelledby="ms-pf-who-title">
        <div className="ms-pf-wrap">
          <p className="ms-pf-eyebrow" data-r style={{ '--i': '0' }}>Who we work with</p>
          <h2 id="ms-pf-who-title" data-r style={{ '--i': '1' }}>
            Accounting and tax for <em>every kind of client.</em>
          </h2>
          <ul className="ms-pf-chips" data-r style={{ '--i': '2' }}>
            <li>Small Business</li>
            <li>Companies</li>
            <li>Self Employed</li>
            <li>SMSF</li>
            <li>Partnerships</li>
            <li>Trusts</li>
            <li>Individuals</li>
          </ul>
          <p className="ms-pf-note" data-r style={{ '--i': '3' }}>
            Based in Norwest Business Park, Bella Vista, we serve businesses and individuals all over Sydney.
          </p>
        </div>
      </section>

      {/* 4. Contact band */}
      <section ref={ctaRef} data-theme="dark" className={`ms-pf-sec ms-pf-cta${ctaSeen ? ' is-in' : ''}`} aria-labelledby="ms-pf-cta-title">
        <div className="ms-pf-wrap">
          <h2 id="ms-pf-cta-title" data-r style={{ '--i': '0' }}>
            Ready to take control of your <em>accounting?</em>
          </h2>
          <p className="ms-pf-lead" data-r style={{ '--i': '1' }}>
            Talk to our team about your accounts, your tax and your plans. We will tell you honestly how we can help.
          </p>
          <div className="ms-pf-btns" data-r style={{ '--i': '2' }}>
            <Link className="ms-pf-btn w" to="/contact">Book a Consultation</Link>
            <a className="ms-pf-btn d" href="tel:+61288147905">Call 02 8814 7905</a>
          </div>

          <div className="ms-pf-info" data-r style={{ '--i': '3' }}>
            <div>
              <small>Office</small>
              <p>Suite 306, Building A, 1 Burbank Place, Baulkham Hills NSW 2153</p>
            </div>
            <div>
              <small>Phone</small>
              <p>
                <a href="tel:+61288147905">02 8814 7905</a><br />
                <a href="tel:+61288243712">02 8824 3712</a>
              </p>
            </div>
            <div>
              <small>Your accountant</small>
              <p>Mandar Gokhale, Principal Chartered Accountant</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
