import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Example icon

const HeaderMinimal: React.FC = () => {
  console.log('HeaderMinimal loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <ShieldCheck className="h-6 w-6" />
          <span>AuthApp</span>
        </Link>
        {/* Minimal header: No navigation links usually needed on auth pages */}
      </div>
    </header>
  );
};

export default HeaderMinimal;