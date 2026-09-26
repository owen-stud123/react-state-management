import { createContext, useContext, useState, type ReactNode } from "react";
import { DARK_THEME, LIGHT_THEME, type Theme } from "../constants/theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// The assignment keeps the provider and its hook together in this module.
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}