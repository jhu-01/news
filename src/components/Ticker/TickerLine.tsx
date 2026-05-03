import React from 'react';
import styles from './TickerLine.module.css';

interface TickerLineProps {
  press: string;
  title: string;
}

const TickerLine: React.FC<TickerLineProps> = ({ press, title }) => {
  return (
    <div className={styles.lineWrapper}>
      <span className={styles.pressName}>{press}</span>
      <a href="#" className={styles.newsTitle}>{title}</a>
    </div>
  );
};

export default TickerLine;