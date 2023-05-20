'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';

export function GlobalNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="max-w-7xl mx-auto p-4 flex justify-between h-16">
      <Link href="/">
        <HomeIcon className="h-6 w-6 text-black dark:text-white" />
      </Link>
      {segment !== 'login' ? <Link href="/login">Login</Link> : null}
    </nav>
  );
}
