import { ArrowRight } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Connect Your Tools',
    description: 'Link your existing stack in minutes. Lumina integrates with 200+ tools out of the box, with no engineering required.',
  },
  {
    number: '02',
    title: 'Invite Your Team',
    description: 'Add teammates, set roles and permissions, and get everyone aligned in a single collaborative workspace.',
  },
  {
    number: '03',
    title: 'Build & Automate',
    description: 'Create projects, set up smart automations, and let AI surface the insights you need to ship faster.',
  },
  {
    number: '04',
    title: 'Measure & Grow',
    description: 'Track performance with beautiful dashboards. Spot bottlenecks early and continuously improve your workflow.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>How It Works</div>
          <h2 className={styles.title}>Up and running in minutes</h2>
          <p className={styles.subtitle}>
            Getting started with Lumina is simple. Follow four easy steps and your team will be shipping at full speed.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.stepWrapper}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
