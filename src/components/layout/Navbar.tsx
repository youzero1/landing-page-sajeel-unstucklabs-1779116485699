import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import styles from './Navbar.module.css';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <nav className={clsx('container', styles.nav)}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          Lumina
        </a>

        <ul className={styles.desktopNav}>
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                className={styles.navLink}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.btnGhost}>Sign In</button>
          <button className={styles.btnPrimary}>Get Started</button>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <button className={styles.btnGhost}>Sign In</button>
            <button className={styles.btnPrimary}>Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
