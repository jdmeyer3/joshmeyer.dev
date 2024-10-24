import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { randomBytes } from 'crypto'

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
  title: "Joshua Meyer | Backend Software Engineer",
  description: "Joshua Meyer's Online Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = randomBytes(128).toString('base64')
  const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`

  return (
    <html lang="en">
      <head nonce={nonce}>
        <meta httpEquiv="Content-Security-Policy" content={csp}/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main />
        {children}
        <script nonce={nonce} />
      </body>
    </html>
  );
}
