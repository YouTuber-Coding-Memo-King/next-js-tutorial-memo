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
      {/* <meta property="og:title" content="Title Here" />
      <meta property="og:description" content="Description Here" />
      <meta property="og:image" content="opengraph-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" /> */}

      <meta property="og:url" content="https://dptest-git-chapter16-youtuber-coding-memo-kings-projects.vercel.app?_vercel_share=ga66n4kk9stu8agivl2lukxahdrmnai8"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Tutorial Chapter 16"></meta>
      <meta property="og:description" content="turorial"></meta>
      <meta property="og:image" content="https://github.com/YouTuber-Coding-Memo-King/dptest/blob/main/public/opengraph-image.png"></meta>


      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:domain" content="dptest-git-chapter16-youtuber-coding-memo-kings-projects.vercel.app"></meta>
      <meta property="twitter:url" content="https://dptest-git-chapter16-youtuber-coding-memo-kings-projects.vercel.app?_vercel_share=ga66n4kk9stu8agivl2lukxahdrmnai8"></meta>
      <meta name="twitter:title" content=""></meta>
      <meta name="twitter:description" content="tutorial"></meta>
      <meta name="twitter:image" content="https://github.com/YouTuber-Coding-Memo-King/dptest/blob/main/public/opengraph-image.png"></meta>


      <link rel="icon" href="react.svg" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

