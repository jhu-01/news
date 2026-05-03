import React from 'react';
import styles from './Ticker.module.css';
import TickerLine from './TickerLine';
import { TICKER_NEWS } from '@/constants/tickerData';

const Ticker: React.FC = () => {
  return (
    <div className={styles.tickerContainer}>
      <TickerLine press={TICKER_NEWS.left.press} title={TICKER_NEWS.left.title} />
      <TickerLine press={TICKER_NEWS.right.press} title={TICKER_NEWS.right.title} />
    </div>
  );
};

export default Ticker;