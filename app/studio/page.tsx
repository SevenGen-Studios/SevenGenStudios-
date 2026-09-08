import { Arrow } from "../components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | SevenGen Studios",
  description: "Meet Brennan Kakakaway and Rylan Iron, the Indigenous business students who founded SevenGen Studios and built openband.ca.",
};

export default function StudioPage() {
  return (
    <main className="subpage">
      <section className="studio-hero"><div><p className="kicker acid">The studio · 03</p><h1>Indigenous-led.<br />Founder-built.</h1><p>SevenGen Studios is a two-person Saskatchewan digital studio building thoughtful websites, useful products and clearer information systems.</p></div><figure><img className="brennan-photo" src="/brennan-kakakaway.webp" alt="Brennan Kakakaway, founder of SevenGen Studios" width="780" height="858" fetchPriority="high" decoding="async" /><figcaption>Brennan Kakakaway · Founder</figcaption></figure></section>
      <section className="studio-story"><p className="kicker">Why SevenGen exists</p><h2>We believe Indigenous communities should have better digital infrastructure—and more Indigenous people should be building it.</h2><div><p>We started SevenGen while studying business in Saskatchewan. Our first product, openband.ca, grew from a simple observation: important First Nations information existed, but it was scattered and difficult to use.</p><p>Building it showed us what a focused two-person team could create. SevenGen Studios is where we apply that same research, business thinking and product discipline to new tools and community work.</p></div></section>
      <section className="team-section">
        <div className="team-heading"><p className="kicker">The people behind the work</p><h2>A two-person studio with direct accountability.</h2></div>
        <div className="team-grid">
          <article className="team-card"><figure><img className="brennan-photo" src="/brennan-kakakaway.webp" alt="Brennan Kakakaway, founder" width="780" height="858" loading="lazy" decoding="async" /></figure><div><span>Founder</span><h3>Brennan Kakakaway</h3><p>Indigenous business student focused on investing, research, product strategy and stronger economic infrastructure for First Nations.</p></div></article>
          <article className="team-card"><figure><img src="/cofounder.webp" alt="Rylan Iron, co-founder of SevenGen Studios" width="1144" height="1560" loading="lazy" decoding="async" /></figure><div><span>Co-founder · Original partner</span><h3>Rylan Iron</h3><p>Co-founded SevenGen alongside Brennan and helped shape openband.ca from the beginning, contributing across research, product development and studio operations.</p><div className="founder-recognition"><h4>Recognition & involvement</h4><ul><li>Pathways to Education valedictorian</li><li>Grade 12 honour roll</li><li>Kelly Best Spirit Award</li><li>Subject award in Indigenous Studies</li><li>Indigenous Student Club member</li></ul></div></div></article>
        </div>
      </section>
      <section className="values"><article><span>01</span><h3>Honest about where we are</h3><p>We are young, early and still building. We will never pretend otherwise.</p></article><article><span>02</span><h3>Close to the work</h3><p>Clients work directly with the people researching, designing and building.</p></article><article><span>03</span><h3>Long-term by default</h3><p>We build for usefulness, ownership and value beyond the launch date.</p></article></section>
      <section className="quiet-cta dark-cta"><h2>Build something that matters.</h2><a href="mailto:sevengenerationscapital@gmail.com?subject=SevenGen%20Studios%20Project">Talk with us <Arrow /></a></section>
    </main>
  );
}
