import React, { createContext, useContext, useState } from 'react';

type ViewMode = 'grid' | 'list';
type TabMode = 'all' | 'subs';

interface ViewContextType {
  viewMode: ViewMode;
  tabMode: TabMode;
  setViewMode: (mode: ViewMode) => void;
  setTabMode: (mode: TabMode) => void;
  resetNavigation: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [tabMode, setTabMode] = useState<TabMode>('all');

  const resetNavigation = () => {
    // 향후 페이지 번호나 카테고리 인덱스 초기화 시 사용
  };

  return (
    <ViewContext.Provider 
      value={{ 
        viewMode, 
        tabMode, 
        setViewMode, 
        setTabMode, 
        resetNavigation 
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};