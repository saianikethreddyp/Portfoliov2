import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Aniketh Reddy | Member of Technical Staff",
  description: "Portfolio of Sai Aniketh Reddy Papayagari. I engineer highly scalable, resilient backend systems and AI-native platforms that drive startup growth.",
  keywords: ["Software Engineer", "Full Stack", "Backend", "AI", "Next.js", "Node.js"],
  openGraph: {
    title: "Sai Aniketh Reddy | Member of Technical Staff",
    description: "Portfolio of Sai Aniketh Reddy Papayagari. I engineer highly scalable, resilient backend systems and AI-native platforms.",
    type: "website",
  },
};

import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html
      lang="en"
      className={`${hanken.variable} ${space.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div className="grain flex min-h-screen">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
