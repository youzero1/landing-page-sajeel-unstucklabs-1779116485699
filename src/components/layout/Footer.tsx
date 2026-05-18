import styles from './Footer.module.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Status'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>✦</span>
              Lumina
            </a>
            <p className={styles.tagline}>
              The modern platform for teams that ship. Collaborate, automate, and grow — all in one place.
            </p>
            <div className={styles.socials}>
              {['𝕏', 'in', 'gh'].map((s) => (
                <a key={s} href="#" className={styles.socialLink}>{s}</a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            {Object.entries(footerLinks).map(([category, items]) => (
              <div key={category} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.link}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 Lumina, Inc. All rights reserved.</p>
          <p className={styles.madeWith}>Made with ✦ for builders everywhere</p>
        </div>
      </div>
    </footer>
  );
}

import clsx from 'clsx';
