import React from 'react';
import styles from './CategoryTabList.module.css';
import CategoryTabItem from './CategoryTabItem';
import { CATEGORIES } from '@/constants/newsData';
import { useView } from '@/contexts/ViewContext';

interface CategoryTabListProps {
  activeIndex: number;
  progress: number;
  currentPressIndex: number;
}

const CategoryTabList: React.FC<CategoryTabListProps> = ({ activeIndex, progress, currentPressIndex }) => {
  const { setNavigation } = useView();

  return (
    <div className={styles.container}>
      {CATEGORIES.map((category, index) => (
        <CategoryTabItem 
          key={category.id}
          category={category}
          isActive={index === activeIndex}
          progress={index === activeIndex ? progress : 0}
          currentPressIndex={index === activeIndex ? currentPressIndex : 1}
          totalPressCount={category.pressList.length || 1}
          onClick={() => setNavigation(index, 0)}
        />
      ))}
    </div>
  );
};

export default CategoryTabList;