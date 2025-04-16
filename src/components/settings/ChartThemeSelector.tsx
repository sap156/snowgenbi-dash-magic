
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeOptionProps {
  id: string;
  name: string;
  gradientClass: string;
  selected: boolean;
  onClick: () => void;
}

const ThemeOption: React.FC<ThemeOptionProps> = ({ id, name, gradientClass, selected, onClick }) => {
  return (
    <div 
      className={`
        rounded-md p-2 text-center cursor-pointer transition-all
        ${selected ? 'border-2 border-primary' : 'border border-border hover:border-primary/50'}
      `}
      onClick={onClick}
    >
      <div className={`mx-auto mb-2 h-8 rounded-md ${gradientClass}`}></div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export const ChartThemeSelector: React.FC = () => {
  const { chartTheme, setChartTheme } = useTheme();
  
  const themes = [
    { 
      id: 'snow', 
      name: 'Snow Theme', 
      gradientClass: 'bg-gradient-to-r from-blue-500 to-purple-500' 
    },
    { 
      id: 'nature', 
      name: 'Nature', 
      gradientClass: 'bg-gradient-to-r from-emerald-500 to-teal-500' 
    },
    { 
      id: 'sunset', 
      name: 'Sunset', 
      gradientClass: 'bg-gradient-to-r from-orange-500 to-red-500' 
    },
    { 
      id: 'monochrome', 
      name: 'Monochrome', 
      gradientClass: 'bg-gradient-to-r from-gray-500 to-gray-700' 
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {themes.map((theme) => (
        <ThemeOption 
          key={theme.id}
          id={theme.id}
          name={theme.name}
          gradientClass={theme.gradientClass}
          selected={chartTheme === theme.id}
          onClick={() => setChartTheme(theme.id as any)}
        />
      ))}
    </div>
  );
};
