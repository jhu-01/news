import React from 'react';
import styles from './GridView.module.css';
import GridCell from './GridCell';
import { PRESS_LIST } from '@/constants/pressData';

const GridView: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
      {PRESS_LIST.map((press) => (
        <GridCell key={press.name} {...press} />
      ))}
    </div>
  );
};

export default GridView;