import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Ensure the component only renders client-side or that useTheme handles SSR gracefully
  // For this setup, useTheme is designed for client-side due to localStorage and document access.
  // A simple check can prevent SSR issues if this component were part of a framework like Next.js.
  // Here, in a CRA/Vite setup, it's generally fine.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or nothing on the server/initial client render to avoid mismatch
    // For a simple button, often just delaying rendering is fine.
    // Or, render a disabled button until theme is determined.
    return <Button variant="ghost" size="icon" disabled aria-label="Toggle theme" className="h-9 w-9"><Sun className="h-5 w-5" /></Button>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="h-9 w-9" // Standard icon button size
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;