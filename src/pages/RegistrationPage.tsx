import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import AuthFormWrapper from '@/components/AuthFormWrapper';
import HeaderMinimal from '@/components/layout/HeaderMinimal';
import FooterMinimal from '@/components/layout/FooterMinimal';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// lucide-react icons
import { AlertTriangle } from 'lucide-react';

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false); // Example for loading state

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    // setIsLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter your passwords.');
      // setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      // setIsLoading(false);
      return;
    }

    // Placeholder for registration logic
    console.log('Attempting registration with:', { fullName, email, password });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate a successful registration for demonstration
    // In a real app, you'd handle API response here
    const registrationSuccessful = true; // Math.random() > 0.3; // Simulate success/failure

    if (registrationSuccessful) {
      console.log('Registration successful for:', email);
      // Optionally, show a success message or redirect
      // For now, let's assume redirection to login page after successful registration
      // Or to a dashboard if auto-login is implemented.
      // toast({ title: "Registration Successful", description: "You can now log in." });
      navigate('/'); // Navigate to LoginPage as per App.tsx root path
    } else {
      setError('Registration failed. An account with this email may already exist or an unknown error occurred.');
    }
    // setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <HeaderMinimal />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormWrapper title="Create Your Account">
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Registration Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••• (min. 8 characters)"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full"
                // disabled={isLoading}
              >
                {/* {isLoading ? 'Creating Account...' : 'Sign Up'} */}
                Sign Up
              </Button>
            </div>
          </form>
          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              to="/" // Path to LoginPage from App.tsx
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Log in
            </Link>
          </p>
        </AuthFormWrapper>
      </main>
      <FooterMinimal />
    </div>
  );
};

export default RegistrationPage;