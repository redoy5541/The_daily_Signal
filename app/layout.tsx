import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Daily Signal News',
  description: 'Independent Journalism',
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Removed the "dark" class from body so the theme 
        changes based on the user's system preferences. 
      */}
      <body className={`${inter.variable} ${playfair.variable} antialiased transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}