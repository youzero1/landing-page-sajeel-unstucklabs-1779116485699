import { stats } from '@/lib/data';
import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
