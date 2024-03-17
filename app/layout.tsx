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


      <meta property="og:image" content="https://nextjs.org/api/learn-og?title=Adding%20Metadata&amp;chapter=16"/>
      <meta name="twitter:title" content="Learn Next.js: Adding Metadata" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:description" content="Learn how to add metadata to your Next.js application."/>
      <meta name="twitter:image" content="opengraph-image.png"/>


      <link rel="icon" href="react.svg" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

