import type { Metadata } from "next";
import { Arrow } from "../components";

export const metadata: Metadata = {
  title: "Partnerships & Contact | SevenGen Studios",
  description: "Contact SevenGen Studios about OpenBand, research, technology partnerships or focused digital projects.",
};

export default function ContactPage() {
  return (
    <main className="subpage contact-page">
      <section className="contact-hero">
        <p className="kicker acid">Partnerships · 04</p>
        <h1>Let’s make important information easier to use.</h1>
        <p>We welcome conversations with First Nations, research institutions, technology partners and organizations interested in making public information more accessible. Tell us what you would like to explore.</p>
      </section>
      <section className="contact-grid">
        <div className="contact-primary">
          <p className="kicker">Direct contact</p>
          <h2>Email the founders.</h2>
          <a href="mailto:sevengenerationscapital@gmail.com?subject=SevenGen%20Studios%20Partnership">sevengenerationscapital@gmail.com <Arrow /></a>
          <small>Saskatchewan, Canada · Open to research and technology collaborations</small>
        </div>
        <div className="project-brief">
          <p className="kicker">A useful first message includes</p>
          <ol>
            <li><span>01</span><p><strong>Your organization</strong><br />Who you are and who the work needs to serve.</p></li>
            <li><span>02</span><p><strong>The problem</strong><br />What is difficult, outdated, scattered or unclear today.</p></li>
            <li><span>03</span><p><strong>The outcome</strong><br />What people should be able to understand or do afterward.</p></li>
            <li><span>04</span><p><strong>The practical details</strong><br />Any timing, existing content and budget range you already know.</p></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
