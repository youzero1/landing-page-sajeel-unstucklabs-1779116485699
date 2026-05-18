import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Cta.module.css';

export default function Cta() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.glowAccent} />

          <div className={styles.iconWrap}>
            <Sparkles size={28} />
          </div>

          <h2 className={styles.title}>
            Ready to transform how your team works?
          </h2>
          <p className={styles.subtitle}>
            Join 50,000+ teams already using Lumina to ship faster and grow smarter.
            Start free today — no credit card required.
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary}>
              Get Started for Free
              <ArrowRight size={18} />
            </button>
            <button className={styles.btnSecondary}>
              Talk to Sales
            </button>
          </div>

          <p className={styles.note}>
            Free 14-day trial on Pro · Cancel anytime · Onboarding support included
          </p>
        </div>
      </div>
    </section>
  );
}
