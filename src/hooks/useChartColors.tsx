
import { useTheme } from "@/contexts/ThemeContext";

// Define chart color themes
const chartColorThemes = {
  snow: [
    '#4A6FFF', // theme-snow-1
    '#5E7CFF', // theme-snow-2
    '#7289FF', // theme-snow-3
    '#8696FF', // theme-snow-4
    '#9AA3FF', // theme-snow-5
    '#AEB0FF', // theme-snow-6
    '#C2BDFF', // theme-snow-7
    '#D6CAFF', // theme-snow-8
  ],
  nature: [
    '#34D399', // theme-nature-1
    '#3EC9A0', // theme-nature-2
    '#48BFA7', // theme-nature-3
    '#52B5AE', // theme-nature-4
    '#5CABB5', // theme-nature-5
    '#66A1BC', // theme-nature-6
    '#7097C3', // theme-nature-7
    '#7A8DCA', // theme-nature-8
  ],
  sunset: [
    '#F97316', // theme-sunset-1
    '#F76B2D', // theme-sunset-2
    '#F56444', // theme-sunset-3
    '#F35C5B', // theme-sunset-4
    '#F15472', // theme-sunset-5
    '#EF4C89', // theme-sunset-6
    '#ED44A0', // theme-sunset-7
    '#EB3CB7', // theme-sunset-8
  ],
  monochrome: [
    '#94A3B8', // theme-mono-1
    '#86909C', // theme-mono-2
    '#787E80', // theme-mono-3
    '#6A6C64', // theme-mono-4
    '#5C5A48', // theme-mono-5
    '#4E482C', // theme-mono-6
    '#403610', // theme-mono-7
    '#322400', // theme-mono-8
  ],
};

// Create config object for recharts
export const useChartConfig = () => {
  const { chartTheme } = useTheme();
  
  // Create a config object as required by the Chart component
  const config = {
    primary: {
      label: "Primary",
      theme: {
        light: chartColorThemes[chartTheme][0],
        dark: chartColorThemes[chartTheme][0],
      },
    },
    secondary: {
      label: "Secondary",
      theme: {
        light: chartColorThemes[chartTheme][1],
        dark: chartColorThemes[chartTheme][1],
      },
    },
    tertiary: {
      label: "Tertiary",
      theme: {
        light: chartColorThemes[chartTheme][2],
        dark: chartColorThemes[chartTheme][2],
      },
    },
    quaternary: {
      label: "Quaternary",
      theme: {
        light: chartColorThemes[chartTheme][3],
        dark: chartColorThemes[chartTheme][3],
      },
    },
    // Add more as needed
  };

  return config;
};

// Get raw colors for other chart libraries or custom use
export const useChartColors = () => {
  const { chartTheme } = useTheme();
  return chartColorThemes[chartTheme];
};

export default useChartColors;
