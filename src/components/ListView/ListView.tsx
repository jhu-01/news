import React from 'react';
import styles from './ListView.module.css';

const ListView: React.FC = () => {
  return (
    <div className={styles.listViewContainer}>
      {/* 상단 카테고리 탭 영역 */}
      <nav className={styles.categoryNav}>
        {/* CategoryTabItem들이 들어갈 자리 */}
      </nav>
      
      {/* 뉴스 컨텐츠 영역 */}
      <article className={styles.contentArea}>
        {/* PressArticleContent가 들어갈 자리 */}
      </article>
    </div>
  );
};

export default ListView;