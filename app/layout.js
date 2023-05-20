import { GlobalNav } from '@/components/GlobalNav';
import './globals.css';

export const metadata = {
  title: 'Next.js - Intercepting Routes',
  description: 'Intercepting Routes Login Demo',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <GlobalNav />
        {children}
        {modal}
      </body>
    </html>
  );
}
