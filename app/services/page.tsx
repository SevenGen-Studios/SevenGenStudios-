import { Arrow } from "../components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | SevenGen Studios",
  description: "Community websites, Indigenous digital products and information design from SevenGen Studios.",
};

export default function ServicesPage() {
  const services = [
    ["01","Community websites","Modern, accessible websites organized around the information members actually need.","Strategy · Structure · Design · Development"],
    ["02","Indigenous digital products","Purpose-built tools that turn scattered information into something communities can use.","Product thinking · UX · Data · Interfaces"],
    ["03","Information design","Clear systems for complex programs, records, services, opportunities and public information.","Research · Content · Systems · Visualization"],
  ];
  return <main className="subpage"><section className="page-hero blue-hero"><p className="kicker">Services · 02</p><h1>Useful work.<br />Clear outcomes.</h1><p>Our main focus is OpenBand. We also welcome carefully scoped digital and research collaborations with Indigenous communities and organizations.</p></section><section className="service-page-list">{services.map(([n,title,copy,tags])=><article key={n}><span>{n}</span><h2>{title}</h2><p>{copy}</p><b>{tags}</b></article>)}</section><section className="process-page"><div><p className="kicker">Our engagement model</p><h2>One clear path.<br />No handoffs.</h2></div><ol><li><span>01</span><b>Discovery</b><p>Define the audience, problem, existing material and measures of success.</p></li><li><span>02</span><b>Scope</b><p>Agree on deliverables, responsibilities, timing and a realistic project boundary.</p></li><li><span>03</span><b>Build</b><p>Move from information structure through design and development with clear review points.</p></li><li><span>04</span><b>Launch</b><p>Test the experience, publish it and provide a documented handoff.</p></li></ol></section><section className="engagement-fit"><p className="kicker">A good fit</p><h2>Come to us when the information matters as much as the interface.</h2><div><p>Community websites and redesigns</p><p>Research-heavy digital products</p><p>Complex information made usable</p><p>Focused first versions and prototypes</p></div></section><section className="quiet-cta"><h2>Have a project in mind?</h2><a href="mailto:sevengenerationscapital@gmail.com?subject=SevenGen%20Studios%20Project">Start a conversation <Arrow /></a></section></main>;
}
