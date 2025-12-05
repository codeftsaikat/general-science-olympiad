import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'General Science Olympiad | Official Portal',
  description: 'Join the world\'s most prestigious science competition for young innovators.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.className} ${playfair.className}`}>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}