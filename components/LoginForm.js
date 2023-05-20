'use client';

import { useRouter } from 'next/navigation';

export function LoginForm({ inModal = false }) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inModal) {
      router.back();
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="rounded-md shadow-sm">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full px-3 py-2 border mb-3 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Email address"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Password"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
