"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { features } from "./openband-showcase";

const clamp = (n: number) => Math.max(0, Math.min(1, n));
export default function Home() {
  const track = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => { const query = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReduced(query.matches); update(); query.addEventListener("change", update); return () => query.removeEventListener("change", update); }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; const el = track.current; if (el) setProgress(clamp(-el.getBoundingClientRect().top / Math.max(1, el.offsetHeight - (el.querySelector(".cinema-stage")?.clientHeight || innerHeight)))); }); };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  useEffect(() => {
    if (!menu) return;
    const old = document.body.style.overflow; document.body.style.overflow = "hidden";
    const escape = (e: KeyboardEvent) => { if(e.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = old; window.removeEventListener("keydown", escape); };
  }, [menu]);
  const stops = [0, .32, .66, 1];
  const go = (p: number) => { const el = track.current; if (!el) return; if (reduced) { const index = stops.indexOf(p); el.querySelectorAll(".cinema-scene")[Math.max(0,index)]?.scrollIntoView({behavior:"instant"}); return; } window.scrollTo({top: window.scrollY + el.getBoundingClientRect().top + p * Math.max(0,el.offsetHeight - (el.querySelector(".cinema-stage")?.clientHeight || innerHeight)), behavior:"smooth"}); };
  const opacities = [1-clamp((progress-.12)/.08), clamp((progress-.12)/.08)*(1-clamp((progress-.45)/.08)), clamp((progress-.45)/.08)*(1-clamp((progress-.79)/.08)), clamp((progress-.79)/.08)];
  const active = progress < .16 ? 0 : progress < .49 ? 1 : progress < .83 ? 2 : 3;
  return <main className={"cinema-home cinema-four"+(reduced?" cinema-reduced":"")} ref={track}>
    <div className="cinema-stage">
      <div className="cinema-atmosphere" aria-hidden="true" />
      <header className="cinema-nav"><Link href="/" className="cinema-brand">SevenGen<span>Studios</span></Link><nav aria-label="Main navigation"><Link href="/work">OpenBand</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link></nav><button aria-expanded={menu} aria-controls="cinema-menu" onClick={()=>setMenu(!menu)}>Menu <span aria-hidden="true">{menu ? "−︎" : "+"}</span></button></header>
      {menu && <nav id="cinema-menu" aria-label="Expanded navigation" className="cinema-menu"><Link href="/work">Explore OpenBand ↗︎</Link><Link href="/services">Services ↗︎</Link><Link href="/studio">The studio ↗︎</Link><Link href="/contact">Partner with us ↗︎</Link><button onClick={()=>setMenu(false)}>Close menu ×︎</button></nav>}
      <section className="cinema-scene cinema-first" aria-hidden={!reduced&&active!==0} inert={!reduced&&active!==0} style={{opacity:reduced?1:opacities[0],pointerEvents:reduced||active===0?"auto":"none"}}>
        <p className="cinema-eyebrow">Indigenous-led technology · Saskatchewan</p><h1>Building for<br/>the next <em>seven.</em></h1><div className="cinema-description"><span className="cinema-rule"/><p>Accessible software and data tools.<br/>Built for the communities they serve.</p></div><button className="cinema-round" onClick={()=>go(.32)} aria-label="Discover our work">↓︎</button>
      </section>
      <section className="cinema-scene cinema-second" aria-hidden={!reduced&&active!==1} inert={!reduced&&active!==1} style={{opacity:reduced?1:opacities[1],pointerEvents:reduced||active===1?"auto":"none"}}>
        <div className="cinema-scene-copy"><p className="cinema-eyebrow">01 / Flagship platform · Live</p><h2>Public information.<br/><em>Made useful.</em></h2><p className="cinema-body">OpenBand brings First Nations financial records, economic information and community updates together in one free public platform.</p><div className="cinema-proof"><span>openband.ca<small>Saskatchewan · Alberta · Manitoba</small></span><Link href="/work" className="cinema-link">Explore OpenBand <span>↗︎</span></Link></div></div><figure className="cinema-product cinema-arrival" style={{transform:`translateY(${(1-opacities[1])*36}px)`}}><a href="https://openband.ca" target="_blank" rel="noreferrer" aria-label="Visit openband.ca"><img src="/openband-home.svg" alt="Earlier OpenBand homepage showing Saskatchewan First Nations search and public filings" width="1280" height="720" /></a><figcaption><span>OpenBand · earlier homepage</span><span>Visit the live platform ↗︎</span></figcaption></figure>
      </section>
      <section className="cinema-scene cinema-features" aria-hidden={!reduced&&active!==2} inert={!reduced&&active!==2} style={{opacity:reduced?1:opacities[2],pointerEvents:reduced||active===2?"auto":"none"}}>
        <div className="cinema-scene-copy"><p className="cinema-eyebrow">02 / One integrated platform</p><h2>More than<br/><em>financial records.</em></h2><div className="cinema-reach"><div><strong>~20K</strong><small>Users to date</small></div><div><strong>~1K</strong><small>Facebook followers</small></div><div><strong>3</strong><small>Provinces</small></div></div><p className="cinema-metric-note">Founder-reported audience figures · November 2026</p><Link href="/work#features" className="cinema-link">Discover the technology <span>↗︎</span></Link></div>
        <div className="cinema-feature-list cinema-arrival" style={{transform:`translateY(${(1-opacities[2])*30}px)`}}>{features.map(f=><a key={f.n} href={f.href} target="_blank" rel="noreferrer"><span>{f.n}</span><div><small>{f.tag}</small><strong>{f.title}</strong></div><span aria-hidden="true">↗︎</span></a>)}</div>
      </section>
      <section className="cinema-scene cinema-third" aria-hidden={!reduced&&active!==3} inert={!reduced&&active!==3} style={{opacity:reduced?1:opacities[3],pointerEvents:reduced||active===3?"auto":"none"}}>
        <div className="cinema-scene-copy"><p className="cinema-eyebrow">Brennan Kakakaway & Rylan Iron</p><h2>Two founders.<br/><em>A long view.</em></h2><p className="cinema-body">Indigenous business students. Partners from the beginning. Building OpenBand and a long-term vision for accessible technology.</p><Link href="/contact" className="cinema-link">Partner with us <span>↗︎</span></Link><Link href="/studio" className="cinema-team-link">Meet the founders & explore their recognition</Link></div><div className="cinema-founders cinema-arrival" style={{transform:`translateY(${(1-opacities[3])*36}px)`}}><figure><img src="/brennan-kakakaway.webp" alt="Brennan Kakakaway, Founder" width="780" height="858" decoding="async"/><figcaption>Brennan Kakakaway<span>Founder</span></figcaption></figure><figure><img src="/cofounder.webp" alt="Rylan Iron, Co-founder and Original Partner" width="1144" height="1560" decoding="async"/><figcaption>Rylan Iron<span>Co-founder · Original Partner</span></figcaption></figure></div>
      </section>
      <footer className="cinema-bottom"><span>Independent technology studio</span><div aria-label="Scene navigation">{["The vision","OpenBand","Features","The people"].map((label,i)=><button key={label} onClick={()=>go(stops[i])} aria-current={!reduced&&active===i?"step":undefined}><span>0{i+1}</span><span>{label}</span></button>)}</div><span>Saskatchewan, Canada</span></footer>
      <div className="cinema-progress" style={{transform:`scaleX(${progress})`}}/>
    </div>
  </main>;
}
