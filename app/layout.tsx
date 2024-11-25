import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from "next";
import localFont from "next/font/local";
import AppNav from '../shared/nav/nav';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nickolas Gough",
  description: "My personal website",
};

export const defaultBodyStyle = {
  height: "100%",
  width: "100%",
  margin: 0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{height: "100vh", width: "100vw", margin: 0}}>
        <AppNav children={children}></AppNav>
      </body>
    </html>
  );
}
