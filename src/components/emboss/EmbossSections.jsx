import { useState } from 'react';
import Reveal from '../Reveal'; // src/components/Reveal.jsx  (this file lives in src/components/emboss/)

/* Embossed (soft raised / pressed) look. Every class is prefixed ms-emboss- so nothing else is affected. */
const css = `
.ms-emboss{--base:#e8ecf4;--ink:#0a1024;--mute:#5b6478;--blue:#2f3fff;--deep:#1610c0;
  --raise:9px 9px 20px rgba(163,177,204,.55),-9px -9px 20px rgba(255,255,255,.95);
  --raise-lg:14px 14px 28px rgba(163,177,204,.65),-12px -12px 26px rgba(255,255,255,1);
  --raise-sm:4px 4px 10px rgba(163,177,204,.6),-4px -4px 10px rgba(255,255,255,.95);
  --press:inset 6px 6px 14px rgba(163,177,204,.6),inset -6px -6px 14px rgba(255,255,255,.95);
  --glow:linear-gradient(145deg,#4a58ff,#1610c0);
  position:relative;overflow-x:clip;background:var(--base);color:var(--ink);padding:100px 28px;
  font:400 17px/1.65 "DM Sans",system-ui,sans-serif}
.ms-emboss *,.ms-emboss *::before,.ms-emboss *::after{box-sizing:border-box}
.ms-emboss-in{max-width:1160px;margin:0 auto}
.ms-emboss h2{margin:0 0 56px;text-align:center;font-size:clamp(32px,4.2vw,54px);line-height:1.08;font-weight:700;letter-spacing:-.03em}
.ms-emboss :focus-visible{outline:2px solid var(--blue);outline-offset:3px}

/* ---- clients ---- */
.ms-emboss-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:30px;margin:0;padding:0;list-style:none}
.ms-emboss-grid>li:nth-child(-n+4){grid-column:span 3}
.ms-emboss-grid>li:nth-child(n+5){grid-column:span 4}
.ms-emboss-card{height:100%;padding:30px;border-radius:26px;background:var(--base);border:1px solid rgba(255,255,255,.6);box-shadow:var(--raise);
  transition:box-shadow .35s cubic-bezier(.2,.7,.2,1),transform .35s cubic-bezier(.2,.7,.2,1)}
.ms-emboss-card:hover{transform:translateY(-4px);box-shadow:var(--raise-lg)}
.ms-emboss-card:active{transform:translateY(0);box-shadow:var(--press)}
.ms-emboss-ic{display:grid;place-items:center;width:52px;height:52px;margin-bottom:20px;border-radius:50%;background:var(--base);color:var(--blue);box-shadow:var(--press);
  transition:background .35s,color .35s,box-shadow .35s}
.ms-emboss-ic svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.ms-emboss-card:hover .ms-emboss-ic{background:var(--glow);color:#fff;box-shadow:0 10px 24px -6px rgba(47,63,255,.6),inset 0 1px 0 rgba(255,255,255,.35)}
.ms-emboss-card h3{margin:0 0 8px;font-size:22px;line-height:1.2;font-weight:700;letter-spacing:-.01em}
.ms-emboss-card p{margin:0;font-size:16px;color:var(--mute)}

/* ---- faq ---- */
.ms-emboss-faq{max-width:760px;margin:0 auto;padding:0;list-style:none;display:grid;gap:20px}
.ms-emboss-item{border-radius:26px;background:var(--base);border:1px solid rgba(255,255,255,.6);box-shadow:var(--raise);
  transition:box-shadow .35s cubic-bezier(.2,.7,.2,1),transform .35s cubic-bezier(.2,.7,.2,1)}
.ms-emboss-item:not(.is-open):hover{transform:translateY(-2px)}
.ms-emboss-item.is-open{box-shadow:var(--press)}
.ms-emboss-q{display:flex;align-items:center;justify-content:space-between;gap:20px;width:100%;padding:26px 30px;border:0;background:none;border-radius:26px;
  font:600 18px/1.4 "DM Sans",system-ui,sans-serif;color:var(--ink);text-align:left;cursor:pointer}
.ms-emboss-plus{position:relative;flex:none;width:42px;height:42px;border-radius:50%;background:var(--base);box-shadow:var(--raise-sm);color:var(--blue);
  transition:transform .4s cubic-bezier(.2,.7,.2,1),background .35s,color .35s,box-shadow .35s}
.ms-emboss-plus::before,.ms-emboss-plus::after{content:"";position:absolute;left:50%;top:50%;width:16px;height:2px;margin:-1px 0 0 -8px;border-radius:2px;background:currentColor}
.ms-emboss-plus::after{transform:rotate(90deg)}
.ms-emboss-item.is-open .ms-emboss-plus{transform:rotate(45deg);background:var(--glow);color:#fff;box-shadow:0 8px 18px -6px rgba(47,63,255,.6),inset 0 1px 0 rgba(255,255,255,.35)}
.ms-emboss-ans{display:grid;grid-template-rows:0fr;opacity:0;visibility:hidden;transition:grid-template-rows .4s cubic-bezier(.2,.7,.2,1),opacity .4s,visibility 0s .4s}
.ms-emboss-item.is-open .ms-emboss-ans{grid-template-rows:1fr;opacity:1;visibility:visible;transition-delay:0s}
.ms-emboss-ans>div{min-height:0;overflow:hidden}
.ms-emboss-panel{margin:0 26px 26px;padding:18px 22px;border-radius:18px;background:var(--base);box-shadow:var(--press);color:var(--mute);font-size:16.5px}

@media(max-width:900px){
  .ms-emboss{padding:80px 20px}
  .ms-emboss-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
  .ms-emboss-grid>li:nth-child(n){grid-column:span 1}
  .ms-emboss-grid>li:last-child{grid-column:span 2}
  .ms-emboss-card{padding:22px}
  .ms-emboss-q{padding:20px 20px;font-size:16.5px}
  .ms-emboss-panel{margin:0 16px 18px}
}
@media(prefers-reduced-motion:reduce){
  .ms-emboss *{transition:none!important}
  .ms-emboss-card:hover,.ms-emboss-item:not(.is-open):hover{transform:none}
}
`;

const ICONS = {
  store: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8"/></svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4"/></svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.5 3.5-5.5 7-5.5s6.2 2 7 5.5"/></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>
  ),
  partners: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/></svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H21M17 12v3M20 12v2"/></svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18c1.3-2.2 3.2-3.2 5.5-3.2s4.2 1 5.5 3.2"/></svg>
  ),
};

const CLIENTS = [
  { icon: 'store', title: 'Small Business', text: 'Accounts, BAS and tax kept up to date.' },
  { icon: 'building', title: 'Companies', text: 'Company structure, financial statements and returns.' },
  { icon: 'person', title: 'Self Employed', text: 'Clear records and tax returns for sole traders.' },
  { icon: 'shield', title: 'SMSF', text: 'Accounting and tax compliance for your fund.' },
  { icon: 'partners', title: 'Partnerships', text: 'Accurate accounts for every partner.' },
  { icon: 'key', title: 'Trusts', text: 'Trust accounts and tax returns done properly.' },
  { icon: 'user', title: 'Individuals', text: 'Tax returns and advice for your personal situation.' },
];

const FAQ = [
  { q: "What does an introductory consultation involve?", a: "A relaxed conversation about your business and goals so we can explain how we can help." },
  { q: "Which areas do you serve?", a: "Bella Vista, Norwest, Baulkham Hills, Castle Hill and surrounding areas of Sydney." },
  { q: "Do you work with individuals as well as businesses?", a: "Yes. We work with individuals, self-employed people, small businesses, companies, partnerships, trusts and SMSFs." },
  { q: "Can you help me choose the right business structure?", a: "Yes. Choosing the right entity is part of our accounting and business services." },
  { q: "How do I get started?", a: "Book a consultation or call 02 8814 7905 or 02 8824 3712." },
];

function EmbossStyle() {
  return <style>{css}</style>;
}

/* ---------- Section: Accounting and tax for every kind of client ---------- */
export function ClientsSection() {
  return (
    <section className="ms-emboss" aria-labelledby="ms-emboss-clients-title">
      <EmbossStyle />
      <div className="ms-emboss-in">
        <Reveal as="h2" id="ms-emboss-clients-title">Accounting and tax for every kind of client</Reveal>
        <ul className="ms-emboss-grid">
          {CLIENTS.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90}>
              <div className="ms-emboss-card">
                <span className="ms-emboss-ic">{ICONS[c.icon]}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Section: Frequently Asked Questions ---------- */
export function FaqSection() {
  const [open, setOpen] = useState(-1); // one item open at a time

  return (
    <section className="ms-emboss" aria-labelledby="ms-emboss-faq-title">
      <EmbossStyle />
      <div className="ms-emboss-in">
        <Reveal as="h2" id="ms-emboss-faq-title">Frequently Asked Questions</Reveal>
        <ul className="ms-emboss-faq">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 80} className={`ms-emboss-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="ms-emboss-q"
                  id={`ms-faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`ms-faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="ms-emboss-plus" aria-hidden="true" />
                </button>
                <div className="ms-emboss-ans" id={`ms-faq-a-${i}`} role="region" aria-labelledby={`ms-faq-q-${i}`}>
                  <div>
                    <p className="ms-emboss-panel">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ClientsSection;
