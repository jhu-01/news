import React, { useMemo } from 'react';
import styles from './ListView.module.css';
import CategoryTabList from './CategoryTab/CategoryTabList';
import PressArticleContent from './PressArticle/PressArticleContent';
import { useView } from '@/contexts/ViewContext';
import { CATEGORIES, LISTVIEW_TIMER_DURATION } from '@/constants/newsData';
import { useTimer } from '@/hooks/useTimer';

const ListView: React.FC = () => {
  const { currentCategoryIndex, currentPressIndex, setNavigation, viewMode } = useView();

  const currentCategory = CATEGORIES[currentCategoryIndex];
  const currentPress = currentCategory.pressList[currentPressIndex];

  const handleNext = () => {
    const isLastPressInCategory = currentPressIndex === currentCategory.pressList.length - 1;
    
    if (!isLastPressInCategory) {
      setNavigation(currentCategoryIndex, currentPressIndex + 1);
    } else {
      // 다음 카테고리로 이동
      const nextCategoryIndex = (currentCategoryIndex + 1) % CATEGORIES.length;
      setNavigation(nextCategoryIndex, 0);
    }
  };

  const { progress } = useTimer({
    duration: LISTVIEW_TIMER_DURATION,
    onFinished: handleNext,
    isActive: viewMode === 'list'
  });

  return (
    <div className={styles.listViewContainer}>
      <nav className={styles.categoryNav}>
        <CategoryTabList 
          activeIndex={currentCategoryIndex} 
          progress={progress} 
          currentPressIndex={currentPressIndex + 1}
        />
      </nav>
      
      <article className={styles.contentArea}>
        {currentPress ? (
          <PressArticleContent data={currentPress} />
        ) : (
          <div className={styles.empty}>해당 카테고리에 편성된 뉴스가 없습니다.</div>
        )}
      </article>
    </div>
  );
};

export default ListView;