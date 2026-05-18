import styles from './LogoCloud.module.css';

const logos = [
  'Vercel', 'Stripe', 'Linear', 'Figma', 'Notion', 'GitHub', 'Shopify', 'Loom',
];

export default function LogoCloud() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Trusted by teams at world-class companies</p>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <div key={logo} className={styles.logo}>{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
