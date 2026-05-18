import { Users, Sparkles, Shield, BarChart3, Puzzle, Zap } from 'lucide-react';
import { features } from '@/lib/data';
import styles from './Features.module.css';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Sparkles,
  Shield,
  BarChart3,
  Puzzle,
  Zap,
};

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Features</div>
          <h2 className={styles.title}>Everything your team needs to thrive</h2>
          <p className={styles.subtitle}>
            Lumina packs a powerful suite of tools into one seamless experience — no duct tape required.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className={clsx(styles.card, index === 1 && styles.cardHighlighted)}
              >
                <div className={clsx(styles.iconWrap, index === 1 && styles.iconWrapHighlighted)}>
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
