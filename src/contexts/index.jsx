import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
