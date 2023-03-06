import '@/styles/globals.scss';
import '@/styles/highlight.scss';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} color="#CACACA" />
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
