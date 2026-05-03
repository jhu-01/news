import React from 'react';
import styles from './GridCell.module.css';
import PressWordmark from '@/components/common/PressWordmark/PressWordmark';
import { PressWordmarkProps } from '@/types/press';

const GridCell: React.FC<PressWordmarkProps> = (props) => {
  return (
    <div className={styles.cell}>
      <PressWordmark {...props} />
    </div>
  );
};

export default GridCell;