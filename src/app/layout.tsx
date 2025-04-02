import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nextタスク管理アプリ',
  description: 'Next.jsとMongoDBを使用したタスク管理アプリの学習です。',
  openGraph: {
    title: 'Nextタスク管理アプリ',
    description: 'Next.jsとMongoDBを使用したタスク管理アプリの学習です。',
  },
  twitter: {
    title: 'Nextタスク管理アプリ',
    description: 'Next.jsとMongoDBを使用したタスク管理アプリの学習です。',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-notosans">{children}</body>
    </html>
  );
}
