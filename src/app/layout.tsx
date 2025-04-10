import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import { Page } from '../components/Page';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Suspense } from 'react';

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Niklas Kors",
  description: "I am a Full-stack developer with many years of experience working with TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Niklas Kors" />
      </head>
      <GoogleAnalytics gaId="G-JV6SW3TFLV" />
      <body
        className={`
           ${ptSerif.variable}
            antialiased 
            h-full 
            leading-9
            text-stone-900`}
      >
        <Suspense>
          <Page>
            {children}
          </Page>
        </Suspense>

      </body>
    </html>
  );
}
