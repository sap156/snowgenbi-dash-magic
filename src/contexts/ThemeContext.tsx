
import React, { createContext, useContext, useState, useEffect } from 'react';

type ChartTheme = 'snow' | 'nature' | 'sunset' | 'monochrome';
type DashboardDensity = 0 | 1 | 2;
type VisualizationType = 'auto' | 'bar' | 'line' | 'pie' | 'table';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  chartTheme: ChartTheme;
  setChartTheme: (theme: ChartTheme) => void;
  dashboardDensity: DashboardDensity;
  setDashboardDensity: (value: DashboardDensity) => void;
  defaultVisualization: VisualizationType;
  setDefaultVisualization: (type: VisualizationType) => void;
  saveThemeSettings: () => void;
}

const defaultThemeContext: ThemeContextType = {
  darkMode: false,
  setDarkMode: () => {},
  chartTheme: 'snow',
  setChartTheme: () => {},
  dashboardDensity: 1,
  setDashboardDensity: () => {},
  defaultVisualization: 'auto',
  setDefaultVisualization: () => {},
  saveThemeSettings: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load settings from localStorage or use defaults
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('snowgenbi-dark-mode');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [chartTheme, setChartTheme] = useState<ChartTheme>(() => {
    const saved = localStorage.getItem('snowgenbi-chart-theme');
    return saved ? (saved as ChartTheme) : 'snow';
  });
  
  const [dashboardDensity, setDashboardDensity] = useState<DashboardDensity>(() => {
    const saved = localStorage.getItem('snowgenbi-dashboard-density');
    return saved ? Number(saved) as DashboardDensity : 1;
  });
  
  const [defaultVisualization, setDefaultVisualization] = useState<VisualizationType>(() => {
    const saved = localStorage.getItem('snowgenbi-default-visualization');
    return saved ? (saved as VisualizationType) : 'auto';
  });

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Save all settings to localStorage
  const saveThemeSettings = () => {
    localStorage.setItem('snowgenbi-dark-mode', JSON.stringify(darkMode));
    localStorage.setItem('snowgenbi-chart-theme', chartTheme);
    localStorage.setItem('snowgenbi-dashboard-density', String(dashboardDensity));
    localStorage.setItem('snowgenbi-default-visualization', defaultVisualization);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        chartTheme,
        setChartTheme,
        dashboardDensity,
        setDashboardDensity,
        defaultVisualization,
        setDefaultVisualization,
        saveThemeSettings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
