import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthFormWrapperProps {
  title: string;
  children: ReactNode;
  className?: string; // Applied to the Card component
  headerClassName?: string; // Applied to the CardHeader component
  titleClassName?: string;  // Applied to the CardTitle component
  contentClassName?: string; // Applied to the CardContent component
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  children,
  className,
  headerClassName,
  titleClassName,
  contentClassName,
}) => {
  console.log(`AuthFormWrapper loaded with title: ${title}`);

  return (
    <Card className={cn("w-full max-w-md shadow-lg", className)}>
      <CardHeader className={cn("p-6 text-center", headerClassName)}>
        <CardTitle className={cn("text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50", titleClassName)}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("p-6 space-y-6", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
};

export default AuthFormWrapper;