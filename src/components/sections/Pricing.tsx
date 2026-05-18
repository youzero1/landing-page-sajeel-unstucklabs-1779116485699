import { useState } from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/lib/data';
import styles from './Pricing.module.css';
import clsx from 'clsx';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Pricing</div>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. No surprises. Pick the plan that fits your team and scale as you grow.
          </p>

          <div className={styles.toggle}>
            <span className={clsx(styles.toggleLabel, !yearly && styles.active)}>Monthly</span>
            <button
              className={clsx(styles.toggleBtn, yearly && styles.toggleBtnOn)}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={clsx(styles.toggleLabel, yearly && styles.active)}>
              Yearly
              <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(styles.card, plan.highlighted && styles.cardHighlighted)}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>
                  {yearly ? plan.yearlyPrice : plan.price}
                </span>
                <span className={styles.period}>/mo</span>
              </div>
              {yearly && plan.price > 0 && (
                <p className={styles.billedYearly}>Billed yearly</p>
              )}
              <p className={styles.planDesc}>{plan.description}</p>
              <button
                className={clsx(
                  styles.planBtn,
                  plan.highlighted && styles.planBtnHighlighted
                )}
              >
                {plan.cta}
              </button>
              <ul className={styles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <Check size={15} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
