import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AKSHAY OFFICIAL',
  description: 'Industrial cyber-tech command center portfolio for Akshay Manoj K P.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
