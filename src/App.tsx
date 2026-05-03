import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Header from './components/Header/Header';
import Ticker from '@/components/Ticker/Ticker';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <section className={styles.tickerSection}>
        <Ticker />
      </section>
      <main className={styles.mainContent}>
        {/* TODO: Grid/List View 컴포넌트 구현 예정 */}
      </main>
    </MainLayout>
  );
};

export default App;