import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import HeaderMinimal from '@/components/layout/HeaderMinimal';
import FooterMinimal from '@/components/layout/FooterMinimal';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, AlertCircle, CheckCircle } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');
  const [email, setEmail] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertVariant, setAlertVariant] = useState<'default' | 'destructive'>('default');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlertMessage(null); // Clear previous messages

    if (!email.trim()) {
      setAlertMessage('Please enter your email address.');
      setAlertVariant('destructive');
      return;
    }

    // Basic email format validation (very simple)
    if (!/\S+@\S+\.\S+/.test(email)) {
        setAlertMessage('Please enter a valid email address.');
        setAlertVariant('destructive');
        return;
    }

    // Simulate API call
    console.log('Password reset requested for:', email);
    setAlertMessage(`If an account with ${email} exists, a password reset link has been sent.`);
    setAlertVariant('default');
    setEmail(''); // Clear input after submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeaderMinimal />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormWrapper title="Reset Your Password">
          <form onSubmit={handleSubmit} className="space-y-6">
            {alertMessage && (
              <Alert variant={alertVariant}>
                {alertVariant === 'destructive' ? (
                  <AlertCircle className="h-4 w-4" />
                ) : (
                  <CheckCircle className="h-4 w-4" />
                )}
                <AlertTitle>{alertVariant === 'destructive' ? 'Error' : 'Success'}</AlertTitle>
                <AlertDescription>{alertMessage}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:text-gray-50"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Reset Link
            </Button>

            <div className="text-sm text-center">
              <Link
                to="/" // Path from App.tsx for LoginPage
                className="font-medium text-primary hover:underline dark:text-primary-light"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </AuthFormWrapper>
      </main>
      <FooterMinimal />
    </div>
  );
};

export default ForgotPasswordPage;