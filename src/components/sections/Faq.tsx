import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/data';
import styles from './Faq.module.css';
import clsx from 'clsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>FAQ</div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Have questions? We have answers. If you need more help, our support team is always here.
          </p>
        </div>

        <div className={styles.list}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={clsx(styles.item, openIndex === index && styles.itemOpen)}
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={clsx(styles.chevron, openIndex === index && styles.chevronOpen)}
                />
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
