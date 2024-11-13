import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Vortex } from "@/components/ui/vortex";

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

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={600}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-[calc(100vh)]">
        <main />
        {children}
        </Vortex>
      </body>
      
    </html>
  );
}
