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
      <meta property="og:title" content="Title Here" />
      <meta property="og:description" content="Description Here" />
      <meta property="og:image" content="data:image/png;base64,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" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
