import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Portfolio website showcasing my projects and skills as a Full Stack Developer",
  keywords: ["Full Stack Developer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.vercel.app",
    title: "Your Name | Full Stack Developer",
    description: "Portfolio website showcasing my projects and skills as a Full Stack Developer",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full Stack Developer",
    description: "Portfolio website showcasing my projects and skills as a Full Stack Developer",
    creator: "@yourtwitterhandle",
    images: ["https://your-portfolio-url.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
