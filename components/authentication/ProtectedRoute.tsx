'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function ProtectedRoute({
  children,
  authenticated,
}: {
  children: React.ReactNode;
  authenticated: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) router.replace('/authentication');
  }, [authenticated, router]);

  if (authenticated) return children;
}

export default ProtectedRoute;
