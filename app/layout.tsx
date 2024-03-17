import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">

      <meta property="og:url" content="https://dptest-git-chapter16-youtuber-coding-memo-kings-projects.vercel.app?_vercel_share=ga66n4kk9stu8agivl2lukxahdrmnai8"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Next.js Chapter 16. 메타 데이터"></meta>
      <meta property="og:description" content="Next.js하시느라 고생하셨습니다. 이제 구독!"></meta>
      <meta property="og:image" content="https://github.com/YouTuber-Coding-Memo-King/dptest/blob/chapter16/public/coding-memo-king.png?raw=true"></meta>

      <link rel="icon" href="react.svg" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

