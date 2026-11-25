import Link from "next/link";

const open = "https://openband.ca";
const profile = open + "/first-nations/blood/";
export const features = [
  { n:"01", title:"Community Capital", tag:"Financial intelligence", copy:"Explore reported revenue, spending, assets and financing from audited statements, where parsed data is available. Review historical revenue categories and follow the original audit.", href:profile+"?tab=capital&year=2024-2025", action:"Explore a capital profile", mark:"capital" },
  { n:"02", title:"Bandy AI", tag:"AI inside OpenBand", copy:"An integrated AI assistant designed to make exploring First Nations information easier. AI-generated answers should be checked against original records.", href:open+"/", action:"Visit OpenBand", mark:"ai" },
  { n:"03", title:"Financial records", tag:"Public filings", copy:"Browse remuneration and expense filings by fiscal year, view historical trends, and use CSV exports and citation tools where available.", href:profile, action:"Explore a community profile", mark:"records" },
  { n:"04", title:"Community discovery", tag:"Geospatial exploration", copy:"Find Nations by province, treaty or tribal council. Explore community locations and reserve-land boundaries using public source data.", href:open+"/alberta/", action:"Explore Alberta", mark:"map" },
  { n:"05", title:"Projects & opportunities", tag:"Economic activity", copy:"Discover community projects, employment opportunities and economic development information through community profiles, as information is available.", href:profile, action:"Explore community tabs", mark:"projects" },
  { n:"06", title:"Governance & updates", tag:"Community information", copy:"Find publicly listed leadership, election information where available, community events and recent news, with links to original sources.", href:open+"/news/?province=AB", action:"Browse public updates", mark:"updates" }
] as const;

export function FeatureGrid(){
  return <div className="sg-feature-grid">{features.map(f=><article className="sg-feature" key={f.n}>
    <div className="sg-feature-top"><span>{f.n} / {f.tag}</span><span aria-hidden="true">↗</span></div>
    <div aria-hidden="true" className={"sg-feature-art sg-art-"+f.mark}>
      {f.mark==="capital"?<><i/><i/><i/><i/><i/><i/></>:f.mark==="ai"?<><span>✳</span><b>Ask. Explore. Verify.</b></>:f.mark==="records"?<><i/><i/><i/><i/></>:f.mark==="map"?<><i/><i/><i/><i/><i/><i/></>:f.mark==="projects"?<><i/><i/><i/></>:<><i/><i/><i/></>}
    </div>
    <h3>{f.title}</h3><p>{f.copy}</p><a href={f.href} target="_blank" rel="noreferrer">{f.action} <span aria-hidden="true">↗</span></a>
  </article>)}</div>
}
export function Reach(){
  return <section className="sg-reach" aria-label="OpenBand reach"><div><strong>~20K</strong><span>Reported users to date</span></div><div><strong>~1K</strong><span>Reported Facebook followers</span></div><div><strong>3</strong><span>Provinces covered</span></div><div><strong>Free</strong><span>Public access</span></div><p>Audience figures are founder-reported approximations, November 2026. Coverage and filing availability vary by community.</p></section>
}
export function ProvinceLinks(){
  return <div className="sg-provinces">{[["SK","Saskatchewan","saskatchewan"],["AB","Alberta","alberta"],["MB","Manitoba","manitoba"]].map(([code,name,slug])=><a key={code} href={open+"/"+slug+"/"} target="_blank" rel="noreferrer"><span>{code}</span><strong>{name}</strong><span aria-hidden="true">↗</span></a>)}</div>
}
export function SourceProcess(){
  return <section className="sg-section sg-method"><div><p className="kicker">Source-first technology</p><h2>From public records to usable information.</h2><p>OpenBand organizes public information without replacing the original source. Our approach makes uncertainty visible instead of filling gaps with guesses.</p><a className="sg-inline-link" href={open+"/methodology/"} target="_blank" rel="noreferrer">Read the methodology ↗</a></div><ol>{[["Find","Index original public filing pages and documents."],["Structure","Extract reported financial information and organize it into profiles and categories."],["Check","Use reconciliation checks and flag records that require manual review."],["Publish","Keep source documents, filing status and citation tools accessible."]].map(([name,copy],i)=><li key={name}><span>0{i+1}</span><div><h3>{name}</h3><p>{copy}</p></div></li>)}</ol></section>
}
export function PartnerCTA(){
  return <section className="sg-section sg-partner"><p className="kicker">Work with SevenGen</p><h2>Build what comes next.<br/><em>With us.</em></h2><p>We are interested in research collaborations, community feedback, responsible data partnerships and support for the continued development of OpenBand.</p><Link href="/contact" className="sg-button">Start a conversation <span aria-hidden="true">↗</span></Link></section>
}
