'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon/Icon';
import styles from './ScrollToTop.module.scss';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <button
      className={`${styles.scrollTop} ${isVisible ? styles['scrollTop--active'] : ''}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      <Icon name="open-icon" className={styles.scrollTop__icon} />
    </button>
  );
}