import type {Metadata} from 'next';
import {DM_Sans, Abel} from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dmsans',
  subsets: ['latin']
});

const abel = Abel({
  variable: '--font-abel',
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Agua Mountains',
  description:
    'Agua Mountains - Agua llegada de lo más alto, de origen extraordinario, con cultura única y sostenible.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth text-base' lang='es'>
      <body
        id='top'
        className={`${dmSans.variable} ${abel.variable} antialiased max-w-[1920px] mx-auto bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
