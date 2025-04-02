import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import { Page } from '../components/Page';

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
      <body
        className={`
           ${ptSerif.variable}
            antialiased 
            h-full 
            leading-9
            text-stone-900`}
      >
        <Page>
          {children}
        </Page>
      </body>
    </html>
  );
}
