import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AccountHeader from "./auth/header";
import LocalizedApp from "./i18n/localized-app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
export const metadata: Metadata = {
  metadataBase: new URL(deploymentHost ? "https://" + deploymentHost : "http://localhost:3000"),
  openGraph: { title: "bloom", siteName: "bloom", type: "website", locale: "ko_KR" },
  twitter: { card: "summary_large_image", title: "bloom" },
  title: "bloom | 동백마을 × A2O LITE",
  description: "동백숲의 이야기가, 당신의 일상에 피어납니다. 꽃님이와 블룸이가 전하는 동백마을 × A2O LITE 콜라보레이션.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Suspense fallback={<div className="app-loading" role="status">bloom…</div>}><LocalizedApp><Suspense fallback={<div className="account-header" role="status">bloom…</div>}><AccountHeader /></Suspense>{children}</LocalizedApp></Suspense></body>
    </html>
  );
}



