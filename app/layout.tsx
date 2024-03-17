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

      <meta property="og:title" content="YouTuber-Coding-Memo-King" />
      <meta property="og:description" content="Please visit this channel" />
      <meta property="og:image" content="https://yt3.googleusercontent.com/yDKBqDHpwXYDGMFQYoLgZSfJ9MmtaayTJ8gB1cJjzwDIlf1HU4XNJxPIhUJ9fsmk13BMCfSzzOw=s900-c-k-c0x00ffffff-no-rj"></meta>
      <meta name="twitter:title" content="YouTuber-Coding-Memo-King" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Please visit and share this channel" />
      <meta name="twitter:image" content="https://yt3.googleusercontent.com/yDKBqDHpwXYDGMFQYoLgZSfJ9MmtaayTJ8gB1cJjzwDIlf1HU4XNJxPIhUJ9fsmk13BMCfSzzOw=s900-c-k-c0x00ffffff-no-rj"></meta>


      <link rel="icon" href="react.svg" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

