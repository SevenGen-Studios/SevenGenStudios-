import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="SevenGen Studios home">
        <span className="mark"><i /><i /><i /></span><strong>SevenGen</strong><em>Studios</em>
      </Link>
      <nav aria-label="Main navigation"><Link href="/work">OpenBand</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link></nav>
      <Link className="nav-cta" href="/contact">Partner with us <Arrow /></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/"><span className="mark"><i /><i /><i /></span><strong>SevenGen</strong><em>Studios</em></Link>
      <p>Indigenous-led technology.<br />Built with a long horizon.</p>
      <div><Link href="/work">OpenBand</Link><Link href="/services">Services</Link><Link href="/studio">Studio</Link><Link href="/contact">Contact</Link><a href="https://openband.ca" target="_blank" rel="noreferrer">openband.ca <Arrow /></a></div>
      <small>© 2026 SevenGen Studios<br />Saskatchewan, Canada<br /><a href="mailto:sevengenerationscapital@gmail.com">sevengenerationscapital@gmail.com</a></small>
    </footer>
  );
}

export { Arrow };
