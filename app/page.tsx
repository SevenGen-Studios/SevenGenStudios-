import Link from "next/link";
import { FeatureGrid, Reach, ProvinceLinks, SourceProcess, PartnerCTA } from "./openband-showcase";

export default function Home(){
  return <main className="sg-home">
    <section className="sg-hero">
      <div className="sg-hero-inner"><p className="kicker">Indigenous-led technology · Saskatchewan, Canada</p><h1>Building for<br/>the next <em>seven.</em></h1><p className="sg-lead">We build accessible software and data tools that make important First Nations information easier to find, understand and verify.</p><div className="sg-actions"><Link href="/work" className="sg-button">Discover OpenBand <span aria-hidden="true">↗</span></Link><Link href="/contact" className="sg-button sg-button-outline">Partner with us <span aria-hidden="true">↗</span></Link></div></div>
      <div className="sg-hero-bottom"><span>Independent. Founder-built. Public-minded.</span><a href="#platform">Explore our flagship platform ↓</a></div>
      <div className="sg-orbit" aria-hidden="true">{Array.from({length:7},(_,i)=><i key={i}/>)}</div>
    </section>
    <section id="platform" className="sg-section sg-platform"><div className="sg-platform-copy"><p className="kicker">01 / Flagship platform · Live</p><h2>Public information.<br/><em>Made useful.</em></h2><p>OpenBand brings First Nations financial records, economic information and community updates together in one free, publicly accessible platform.</p><div className="sg-actions"><a className="sg-button" href="https://openband.ca/" target="_blank" rel="noreferrer">Visit OpenBand ↗</a><Link className="sg-inline-link" href="/work">Explore the platform ↗</Link></div></div><figure className="sg-product-preview"><a href="https://openband.ca/" target="_blank" rel="noreferrer"><img src="/openband-home.svg" alt="Earlier OpenBand homepage showing the Saskatchewan First Nations search experience" width="1280" height="720"/></a><figcaption><span>OpenBand / earlier Saskatchewan homepage</span><span>Visit the live platform ↗</span></figcaption></figure></section>
    <Reach/>
    <section className="sg-section sg-features"><p className="kicker">02 / One integrated platform</p><h2>More than financial records.</h2><p className="sg-section-intro">Six ways to explore the information that matters, all within OpenBand.</p><FeatureGrid/></section>
    <section className="sg-section sg-coverage"><p className="kicker">03 / Growing coverage</p><h2>From Saskatchewan.<br/>Across the Prairies.</h2><p>Explore the live provincial experiences. Not every filing is available or parsed; OpenBand distinguishes the two.</p><ProvinceLinks/></section>
    <SourceProcess/>
    <section className="sg-section sg-founders"><div><p className="kicker">04 / The people</p><h2>Two founders.<br/><em>A long view.</em></h2><p>Indigenous business students building technology from Saskatchewan. We started OpenBand because important information existed, but accessing it was harder than it needed to be.</p><Link href="/studio" className="sg-inline-link">Meet the founders ↗</Link></div><div className="sg-founder-photos"><figure><img src="/brennan-kakakaway.webp" alt="Brennan Kakakaway" width="780" height="858" loading="lazy"/><figcaption>Brennan Kakakaway <span>Founder</span></figcaption></figure><figure><img src="/cofounder.webp" alt="Rylan Iron" width="1144" height="1560" loading="lazy"/><figcaption>Rylan Iron <span>Co-founder · Original partner</span></figcaption></figure></div></section>
    <PartnerCTA/>
  </main>
}
