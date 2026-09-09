"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const clamp = (n: number) => Math.max(0, Math.min(1, n));
export default function Home() {
  const track = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; const el = track.current; if (el) setProgress(clamp(-el.getBoundingClientRect().top / Math.max(1, el.offsetHeight - innerHeight))); }); };
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
  const go = (p: number) => { const el = track.current; if(el) window.scrollTo({top: window.scrollY + el.getBoundingClientRect().top + p * (el.offsetHeight - innerHeight), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"}); };
  const opacities = [1-clamp((progress-.20)/.08), clamp((progress-.32)/.08)*(1-clamp((progress-.55)/.08)), clamp((progress-.67)/.08)];
  const active = progress < .32 ? 0 : progress < .67 ? 1 : 2;
  return <main className="cinema-home" ref={track}>
    <div className="cinema-stage">
      <div className="cinema-atmosphere" aria-hidden="true" />
      <header className="cinema-nav"><Link href="/" className="cinema-brand">SevenGen<span>Studios</span></Link><nav aria-label="Main navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link></nav><button aria-expanded={menu} aria-controls="cinema-menu" onClick={()=>setMenu(!menu)}>Menu <span aria-hidden="true">{menu ? "−︎" : "+"}</span></button></header>
      {menu && <nav id="cinema-menu" aria-label="Expanded navigation" className="cinema-menu"><Link href="/work">Our work ↗︎</Link><Link href="/services">Services ↗︎</Link><Link href="/studio">The studio ↗︎</Link><Link href="/contact">Start a project ↗︎</Link><button onClick={()=>setMenu(false)}>Close menu ×︎</button></nav>}
      <section className="cinema-scene cinema-first" aria-hidden={active!==0} inert={active!==0} style={{opacity:opacities[0],pointerEvents:active===0?"auto":"none"}}>
        <p className="cinema-eyebrow">Indigenous-led · Saskatchewan</p><h1>Building for<br/>the next <em>seven.</em></h1><div className="cinema-description"><span className="cinema-rule"/><p>Websites and digital products.<br/>Built by the people you meet.</p></div><button className="cinema-round" onClick={()=>go(.45)} aria-label="Discover our work">↓︎</button>
      </section>
      <section className="cinema-scene cinema-second" aria-hidden={active!==1} inert={active!==1} style={{opacity:opacities[1],pointerEvents:active===1?"auto":"none"}}>
        <div className="cinema-scene-copy"><p className="cinema-eyebrow">01 / Our first product</p><h2>Public information.<br/><em>Made useful.</em></h2><p className="cinema-body">We built openband.ca to make Saskatchewan First Nations records and community information easier to find and verify.</p><div className="cinema-proof"><span>openband.ca<small>Research · Design · Development</small></span><Link href="/work" className="cinema-link">Explore the work <span>↗︎</span></Link></div></div><figure className="cinema-product cinema-arrival" style={{transform:`translateY(${(1-opacities[1])*36}px)`}}><a href="https://openband.ca" target="_blank" rel="noreferrer" aria-label="Visit openband.ca"><img src="/openband-home.svg" alt="Actual openband.ca homepage showing its Saskatchewan First Nations search and public filings" width="1280" height="720" /></a><figcaption><span>openband.ca</span><span>Designed & built by SevenGen ↗︎</span></figcaption></figure>
      </section>
      <section className="cinema-scene cinema-third" aria-hidden={active!==2} inert={active!==2} style={{opacity:opacities[2],pointerEvents:active===2?"auto":"none"}}>
        <div className="cinema-scene-copy"><p className="cinema-eyebrow">Brennan Kakakaway & Rylan Iron</p><h2>Two founders.<br/><em>A long view.</em></h2><p className="cinema-body">Indigenous business students. Partners from the beginning. Your project, built directly with us.</p><Link href="/contact" className="cinema-link">Let’s build something <span>↗︎</span></Link><Link href="/studio" className="cinema-team-link">Meet the founders & explore their recognition</Link></div><div className="cinema-founders cinema-arrival" style={{transform:`translateY(${(1-opacities[2])*36}px)`}}><figure><img src="/brennan-kakakaway.webp" alt="Brennan Kakakaway, Founder" width="780" height="858" decoding="async"/><figcaption>Brennan Kakakaway<span>Founder</span></figcaption></figure><figure><img src="/cofounder.webp" alt="Rylan Iron, Co-founder and Original Partner" width="1144" height="1560" decoding="async"/><figcaption>Rylan Iron<span>Co-founder · Original Partner</span></figcaption></figure></div>
      </section>
      <footer className="cinema-bottom"><span>Independent digital studio</span><div aria-label="Scene navigation">{["The vision","The work","The people"].map((label,i)=><button key={label} onClick={()=>go([0,.45,.85][i])} aria-current={active===i?"step":undefined}><span>0{i+1}</span><span>{label}</span></button>)}</div><span>Saskatchewan, Canada</span></footer>
      <div className="cinema-progress" style={{transform:`scaleX(${progress})`}}/>
    </div>
  </main>;
}
