import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Testimonials</div>
          <h2 className={styles.title}>Loved by thousands of teams</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Here's what teams at leading companies have to say about Lumina.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className={styles.content}>"{t.content}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
