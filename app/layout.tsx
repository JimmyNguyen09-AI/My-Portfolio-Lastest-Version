import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Jimmy Nguyen — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Jimmy Nguyen — AI Engineer and Full Stack Developer specialising in GenAI, Computer Vision, LangChain, and modern web systems. Based in Sydney, Australia.",
  keywords: [
    "Jimmy Nguyen",
    "AI Engineer",
    "Full Stack Developer",
    "GenAI",
    "Computer Vision",
    "LangChain",
    "Next.js",
    "Python",
    "Sydney",
  ],
  authors: [{ name: "Jimmy Nguyen" }],
  creator: "Jimmy Nguyen",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    title: "Jimmy Nguyen — AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Jimmy Nguyen — AI Engineer and Full Stack Developer specialising in GenAI, Computer Vision, and modern web systems.",
    siteName: "Jimmy Nguyen Portfolio",
    images: [
      {
        url: "/avt2.jpg",
        width: 1200,
        height: 630,
        alt: "Jimmy Nguyen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy Nguyen — AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Jimmy Nguyen — AI Engineer specialising in GenAI, Computer Vision, and modern web systems.",
    images: ["/avt2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
