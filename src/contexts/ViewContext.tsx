import React, { createContext, useContext, useState } from 'react';

type ViewMode = 'grid' | 'list';
type TabMode = 'all' | 'subs';

interface ViewContextType {
  viewMode: ViewMode;
  tabMode: TabMode;
  currentCategoryIndex: number;
  currentPressIndex: number;
  setViewMode: (mode: ViewMode) => void;
  setTabMode: (mode: TabMode) => void;
  setNavigation: (catIdx: number, pressIdx: number) => void;
  resetNavigation: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [tabMode, setTabMode] = useState<TabMode>('all');
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentPressIndex, setCurrentPressIndex] = useState(0);

  const setNavigation = (catIdx: number, pressIdx: number) => {
    setCurrentCategoryIndex(catIdx);
    setCurrentPressIndex(pressIdx);
  };

  const resetNavigation = () => {
    setCurrentCategoryIndex(0);
    setCurrentPressIndex(0);
  };

  return (
    <ViewContext.Provider 
      value={{ 
        viewMode, 
        tabMode, 
        currentCategoryIndex,
        currentPressIndex,
        setViewMode, 
        setTabMode, 
        setNavigation,
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