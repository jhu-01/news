import React from 'react';
import styles from './CategoryTabItem.module.css';
import { CategoryData } from '@/types/news';

interface CategoryTabItemProps {
  category: CategoryData;
  isActive: boolean;
  progress: number;
  currentPressIndex?: number;
  totalPressCount?: number;
  onClick: () => void;
}

const CategoryTabItem: React.FC<CategoryTabItemProps> = ({ 
  category, 
  isActive, 
  progress, 
  currentPressIndex = 1,
  totalPressCount = 1,
  onClick 
}) => {
  return (
    <div 
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div 
        className={styles.progressBar} 
        style={{ width: isActive ? `${progress}%` : '0%' }}
      />
      <span className={styles.name}>{category.name}</span>
      {isActive && (
        <span className={styles.counter}>
          <span className={styles.current}>{currentPressIndex}</span>
          <span className={styles.divider}>/</span>
          <span className={styles.total}>{totalPressCount}</span>
        </span>
      )}
    </div>
  );
};

export default CategoryTabItem;