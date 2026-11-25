import type { Metadata } from "next";
import { FeatureGrid, Reach, ProvinceLinks, SourceProcess, PartnerCTA } from "../openband-showcase";

export const metadata: Metadata = {
  title: "OpenBand | SevenGen Studios",
  description: "Discover OpenBand, SevenGen Studios’ free First Nations public records, financial intelligence and community information platform.",
};
export default function WorkPage(){
  return <main className="subpage sg-work">
    <section className="sg-section sg-work-hero"><div><p className="kicker">SevenGen Studios / Flagship product</p><h1>OpenBand<em>.ca</em></h1><p className="sg-lead">A clearer way to explore First Nations public financial records, community information and economic activity.</p><div className="sg-actions"><a className="sg-button" href="https://openband.ca/" target="_blank" rel="noreferrer">Open the live platform ↗</a><a className="sg-button sg-button-outline" href="#features">Explore features ↓</a></div></div><figure className="sg-product-preview"><a href="https://openband.ca/" target="_blank" rel="noreferrer"><img src="/openband-home.svg" alt="Earlier OpenBand Saskatchewan homepage" width="1280" height="720"/></a><figcaption>Earlier Saskatchewan homepage · Explore the current live product</figcaption></figure></section>
    <Reach/>
    <section className="sg-section sg-features" id="features"><p className="kicker">The product</p><h2>One platform. Six connected experiences.</h2><p className="sg-section-intro">Built around accessible public information, original sources and transparent filing status. Feature availability varies by community.</p><FeatureGrid/></section>
    <section className="sg-section sg-coverage"><p className="kicker">Coverage / November 2026</p><h2>Three provinces.<br/>Growing community by community.</h2><ProvinceLinks/><div className="sg-alberta"><div><p className="kicker">Alberta coverage example</p><h3>Explore the records behind the numbers.</h3><p>OpenBand’s Alberta page reports the following coverage as of November 24, 2026. These figures are a snapshot, not a claim that every community has complete records.</p><a className="sg-inline-link" href="https://openband.ca/alberta-coverage-report.html" target="_blank" rel="noreferrer">View the coverage report ↗</a></div><dl><div><dt>Communities tracked</dt><dd>48</dd></div><div><dt>With parsed data</dt><dd>41</dd></div><div><dt>Parsed filings</dt><dd>238</dd></div></dl></div></section>
    <SourceProcess/>
    <section className="sg-section sg-principles"><p className="kicker">Our commitment</p><h2>Public access. Responsible development.</h2><p>OpenBand is independent and is not an official government or First Nation service. We aim to keep public information accessible, make limitations visible, and respect First Nations' authority over their own information. Public availability is not a substitute for community consent where it is required.</p><p>We welcome corrections, community feedback and opportunities to improve the platform. OpenBand is evolving; we do not claim complete national coverage or independently verified accuracy for every record.</p></section>
    <PartnerCTA/>
  </main>
}
