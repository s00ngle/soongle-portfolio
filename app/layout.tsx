import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "김용순 포트폴리오",
  description: "Soongle Portfolio - Frontend Developer",
  keywords: [
    "Soongle",
    "Portfolio",
    "Frontend Developer",
    "순글",
    "김용순",
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "soongle",
    "portfolio",
    "developer",
    "frontend",
  ],
  authors: [{ name: "Soongle", url: "https://github.com/s00ngle" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "김용순 포트폴리오",
    description: "프론트엔드 개발자 김용순 포트폴리오",
    type: "website",
    locale: "ko_KR",
    siteName: "Soongle Portfolio",
    url: "https://soongle-portfolio.vercel.app/",
    images: [
      {
        url: "https://soongle-portfolio.vercel.app/soongle-blog-og-image.png",
        width: 1200,
        height: 630,
        alt: "Soongle Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} antialiased mx-auto w-full max-w-4xl min-h-screen min-w-80`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="px-4 sm:px-6">{children}</main>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
