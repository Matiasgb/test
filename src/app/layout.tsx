import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/footer/footer.component";
import Header from "@/components/header/header.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MKS PAMP",
  description: "MKS Pamp Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        {/* ✅ Custom font link here */}
        <link rel="stylesheet" href="https://use.typekit.net/qzz0kpu.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FCFCFC]`}
      >
          <Header /> 
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
