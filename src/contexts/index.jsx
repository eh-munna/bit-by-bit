import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

function ThemeProvider({ children }) {
  // Read initial theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    // Save new theme in localStorage
    localStorage.setItem('theme', theme ? 'dark' : 'light');

    // Update HTML class for Tailwind dark mode
    document.documentElement.classList.toggle('dark', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
