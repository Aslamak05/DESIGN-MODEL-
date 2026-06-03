export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-border py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-gold rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-gold rotate-45" />
            </div>
            <span className="font-display text-base font-bold tracking-widest text-cream uppercase">
              Design Agency
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {["Services", "Portfolio", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-[11px] tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-mono text-[11px] text-muted tracking-wider">
            © {year} Design Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
