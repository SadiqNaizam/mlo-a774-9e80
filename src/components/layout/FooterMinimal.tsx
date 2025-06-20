import React from 'react';
import { Link } from 'react-router-dom';

const FooterMinimal: React.FC = () => {
  console.log('FooterMinimal loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t bg-background text-muted-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        <p className="mb-2 sm:mb-0">
          &copy; {currentYear} AuthApp. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          {/* These routes are not in App.tsx, so they might lead to NotFound or be handled by a broader setup. */}
          {/* For this exercise, we link them as specified. */}
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default FooterMinimal;