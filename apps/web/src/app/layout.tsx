import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeRegistry } from '@/theme/themeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Routify',
  description:
    '「Routify」は習慣化に最適なアプリです。スケジュールプランニング機能や、メンバーとモチベーションを高め会えるマッチング機能を搭載しています。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
