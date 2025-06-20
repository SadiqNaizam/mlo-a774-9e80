import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      // Check system preference if no theme is stored
      if (storedTheme) {
        return storedTheme;
      }
      // Default to system preference, or light if not available/determinable
      // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      // For simplicity as per original plan, default to light if nothing explicit.
      // System preference can be a future enhancement.
      return 'light';
    }
    return 'light'; // Default for SSR or non-browser env
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme class
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Persist theme choice
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // setTheme can be used if direct setting is needed, e.g., 'light', 'dark', 'system'
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return { theme, toggleTheme, setTheme };
}