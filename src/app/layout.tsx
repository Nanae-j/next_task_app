import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next タスク管理アプリ',
  description: 'Next,mongoDBを使用したアプリ学習',
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
