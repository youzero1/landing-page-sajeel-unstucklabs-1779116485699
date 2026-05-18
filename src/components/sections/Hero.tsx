import { ArrowRight, Play } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToFeatures = () => {
    const el = document.querySelector('#features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.glowAccent} />

      <div className={clsx('container', styles.content)}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Introducing Lumina 2.0 — Now with AI Insights</span>
          <ArrowRight size={14} />
        </div>

        <h1 className={styles.heading}>
          The Future of{' '}
          <span className={styles.gradient}>Team Collaboration</span>
          <br />
          Starts Here
        </h1>

        <p className={styles.subheading}>
          Lumina brings your team, tools, and workflows into one beautiful,
          intelligent platform. Ship faster, collaborate smarter, and build
          products your customers love.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={scrollToFeatures}>
            Start for Free
            <ArrowRight size={18} />
          </button>
          <button className={styles.btnSecondary}>
            <div className={styles.playBtn}>
              <Play size={14} fill="currentColor" />
            </div>
            Watch Demo
          </button>
        </div>

        <p className={styles.disclaimer}>
          Free forever on Starter · No credit card required · Setup in 2 minutes
        </p>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.windowDots}>
              <span /><span /><span />
            </div>
            <span className={styles.cardTitle}>Lumina Dashboard</span>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.mockSidebar}>
              {['Overview', 'Projects', 'Team', 'Analytics', 'Settings'].map((item) => (
                <div key={item} className={styles.mockSidebarItem}>
                  <div className={styles.mockIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={styles.mockMain}>
              <div className={styles.mockRow}>
                {[{ label: 'Active Projects', val: '24', color: '#7c6ef5' }, { label: 'Tasks Done', val: '148', color: '#3ecf8e' }, { label: 'Team Members', val: '12', color: '#e05aad' }].map((stat) => (
                  <div key={stat.label} className={styles.mockStat}>
                    <div className={styles.mockStatValue} style={{ color: stat.color }}>{stat.val}</div>
                    <div className={styles.mockStatLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className={styles.mockChart}>
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div key={i} className={styles.mockBar} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import clsx from 'clsx';
